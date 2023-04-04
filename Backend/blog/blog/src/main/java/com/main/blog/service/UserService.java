package com.main.blog.service;

import com.main.blog.dto.RequestUserDto;
import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.model.User;
import com.main.blog.repository.IUserRepository;
import com.main.blog.service.interfaces.IUserService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository iUserRepository;

    @Autowired
    private Mapper mapper;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;
    @Override
    public ResponseEntity<?> getAll() {
        return null;
    }

    @Override
    public ResponseEntity<?> getUser(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<?> deleteUser(Long id, String token) {
        //hacer verificacion para que no se pueda borrar otro usuario si no soy ADMIN
        User userToDelete = iUserRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        iUserRepository.delete(userToDelete);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("User deleted");
    }

}
