package com.main.blog.service;

import com.main.blog.config.CustomUserDetails;
import com.main.blog.dto.LoginUserDto;
import com.main.blog.dto.RequestUserDto;
import com.main.blog.dto.ResponseUserDto;
import com.main.blog.exception.AccessDeniedException;
import com.main.blog.exception.ResourceFoundException;
import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.exception.UserNotAllowedException;
import com.main.blog.model.Role;
import com.main.blog.model.User;
import com.main.blog.model.enums.RoleName;
import com.main.blog.repository.IUserRepository;
import com.main.blog.service.interfaces.IAuthorizationService;
import com.main.blog.service.interfaces.IRoleService;
import com.main.blog.util.Mapper;
import com.nimbusds.openid.connect.sdk.AuthenticationResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Date;
import java.util.Objects;

public class AuthorizationService implements IAuthorizationService {
    @Autowired
    private Mapper mapper;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IRoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;


    @Override
    public ResponseEntity<?> save(RequestUserDto requestUserDto) {
        try {
            return createUser(requestUserDto, RoleName.ROLE_USER);
        } catch (ResourceFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> saveAdmin(RequestUserDto requestUserDto) throws SQLIntegrityConstraintViolationException {
        try {
            return createUser(requestUserDto, RoleName.ROLE_ADMIN);
        } catch (ResourceFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @Override
    public ResponseUserDto update(RequestUserDto requestUserDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (!(Objects.equals(userRepository.findByEmail(auth.getName()).getId(), userRepository.findByEmail(requestUserDto.getEmail()).getId()))) {
            throw new AccessDeniedException("You can not modify another user´s details");
        }
        User user = userRepository.findByEmail(requestUserDto.getEmail());

//        user.setPassword(passwordEncoder.encode(patchUserDto.getPassword()));
        user.setName(requestUserDto.getName());
        user.setLastName(requestUserDto.getLastName());
        user.setEmail(user.getEmail());
        user.setState(requestUserDto.getState());
        user.setPhone(requestUserDto.getPhone());


        User userUpdated = userRepository.save(user);

        return mapper.getMapper().map(userUpdated, ResponseUserDto.class);
    }


    public User findByEmail(String email) throws ResourceNotFoundException {
        if (!userRepository.existsByEmail(email)) {
            throw new ResourceNotFoundException("User not found");
        }
        return userRepository.findByEmail(email);
    }

    public ResponseUserDto getUserAuthenticated() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return mapper.getMapper().map(userRepository.findByEmail(email), ResponseUserDto.class);
    }

    @Override
    public ResponseEntity<?> login(LoginUserDto loginUser) {
        try {
            if (userRepository.existsByEmail(loginUser.getEmail())) {
                if (userRepository.findByEmail(loginUser.getEmail()).isSoftDelete()) {
                    throw new UserNotAllowedException("User is pending deletion");
                }
            } else {
                throw new ResourceNotFoundException("User not found");
            }
            ResponseUserDto user = mapper.getMapper().map(userRepository.findByEmail(loginUser.getEmail()), ResponseUserDto.class);
            String token = this.authenticate(loginUser.getEmail(), loginUser.getPassword());
            user.setToken(token);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(user);
        } catch (UserNotAllowedException | ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response, Authentication auth) {
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return ResponseEntity.status(HttpStatus.OK).body("Logged out successfully");
    }


    public ResponseEntity<?> createUser(RequestUserDto requestUserDto, RoleName role) {
        if (userRepository.existsByEmail(requestUserDto.getEmail())) {
            if (!userRepository.findByEmail(requestUserDto.getEmail()).isSoftDelete()) {
                throw new ResourceFoundException("User email already exists");
            }
            return ResponseEntity.status(HttpStatus.OK).body(rollbackSoftDelete(requestUserDto));
        }
        return createNewUser(requestUserDto, role);
    }


    public ResponseEntity<?> createNewUser(RequestUserDto requestUserDto, RoleName roleName) {
        User user = mapper.getMapper().map(requestUserDto, User.class);
        user.setAvatar("https://unavatar.io/" + requestUserDto.getEmail());
        user.setPassword(passwordEncoder.encode(requestUserDto.getPassword()));
        try {
            Role role = roleService.findByName(roleName);
            user.setRole(role);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
        user.setCreationDate(new Date());
        User userSaved = userRepository.save(user);

        try {
            String token = this.authenticate(requestUserDto.getEmail(), requestUserDto.getPassword());

            ResponseUserDto responseUserDto = mapper.getMapper().map(userSaved, ResponseUserDto.class);
            responseUserDto.setToken(token);

            return ResponseEntity.status(HttpStatus.OK).body(responseUserDto);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    public ResponseUserDto rollbackSoftDelete(RequestUserDto requestUserDto) {
        User user = userRepository.findByEmail(requestUserDto.getEmail());
        user.setSoftDelete(false);
        String token = this.authenticate(requestUserDto.getEmail(), requestUserDto.getPassword());
        ResponseUserDto responseUserDto = mapper.getMapper().map(userRepository.save(user), ResponseUserDto.class);
        responseUserDto.setToken(token);
        return responseUserDto;
    }

    private String authenticate(String email, String password) throws AuthenticationException {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User user = findByEmail(email);
        return jwtService.generateToken(new CustomUserDetails(user));

    }
}
