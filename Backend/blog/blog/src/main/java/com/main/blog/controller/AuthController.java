package com.main.blog.controller;

import com.main.blog.dto.LoginUserDto;
import com.main.blog.dto.RequestUserDto;
import com.main.blog.service.interfaces.IAuthorizationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private IAuthorizationService iAuthorizationService;


    @PostMapping("/signUp")
    public ResponseEntity<?> signUp(@RequestBody RequestUserDto userDto) throws SQLIntegrityConstraintViolationException {
        return ResponseEntity.status(HttpStatus.CREATED).body( iAuthorizationService.saveAdmin(userDto));
    }

    @PostMapping("/signIn")
    public ResponseEntity<?> signIn(@RequestBody LoginUserDto loginUser) throws AuthenticationException {
        return iAuthorizationService.login(loginUser);
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return iAuthorizationService.logout(request, response, auth);
    }
}
