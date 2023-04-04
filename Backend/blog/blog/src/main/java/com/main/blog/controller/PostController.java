package com.main.blog.controller;

import com.main.blog.dto.RequestPostDto;
import com.main.blog.service.interfaces.IPostService;

import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/posts")
public class PostController {
    @Autowired
    private Mapper mapper;

    @Autowired
    private IPostService iPostService;

    @GetMapping("")
    public ResponseEntity<?> getAllPosts() {
        return iPostService.getAllPosts();
    }

    @PostMapping("")
    public ResponseEntity<?> createPost(@RequestBody RequestPostDto requestPostDto){
        return iPostService.createPost(requestPostDto);
    };
}
