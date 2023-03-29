package com.main.blog.controller;

import com.main.blog.dto.LoginUserDto;
import com.main.blog.model.User;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private Mapper mapper;

    @GetMapping("/{id}")
    ResponseEntity<?> getUser(@PathVariable Long id) {
        return null;
    }
}
