package com.main.blog.service.interfaces;

import com.main.blog.dto.LoginUserDto;
import com.main.blog.dto.RequestUserDto;
import com.main.blog.dto.ResponseUserDto;
import com.main.blog.exception.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;

import java.sql.SQLIntegrityConstraintViolationException;

public interface IAuthorizationService {

    ResponseEntity<?> save(RequestUserDto requestUserDto);

    ResponseEntity<?> saveAdmin(RequestUserDto requestUserDto) throws SQLIntegrityConstraintViolationException;

    ResponseUserDto update(RequestUserDto requestUserDto);

    ResponseEntity<?> login(LoginUserDto loginUser);


    ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response, Authentication auth);
}
