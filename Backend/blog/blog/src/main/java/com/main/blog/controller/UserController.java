package com.main.blog.controller;

import com.main.blog.dto.LoginUserDto;
import com.main.blog.dto.RequestUserDto;
import com.main.blog.model.User;
import com.main.blog.service.interfaces.IAuthorizationService;
import com.main.blog.service.interfaces.IUserService;
import com.main.blog.util.Mapper;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private Mapper mapper;

    @Autowired
    private IUserService iUserService;

    @Autowired
    private IAuthorizationService iAuthorizationService;
    @GetMapping("/")
    public ResponseEntity<?> getAllUsers() {
        return iUserService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        return iUserService.getUser(id);
    }

    @PatchMapping("/patch")
    public ResponseEntity<?> patchUser(@RequestBody RequestUserDto user) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iAuthorizationService.update(user));
    }

    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id, @RequestHeader(value = "Authorization") String token) {
        return iUserService.deleteUser(id, token);
    }
}
