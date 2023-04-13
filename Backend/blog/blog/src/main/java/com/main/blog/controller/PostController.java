package com.main.blog.controller;

import com.main.blog.dto.PatchPostDto;
import com.main.blog.dto.RequestPostDto;
import com.main.blog.dto.UserIdDto;
import com.main.blog.service.interfaces.IPostService;

import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/posts")
public class PostController {
    @Autowired
    private Mapper mapper;

    @Autowired
    private IPostService iPostService;

    @GetMapping("/")
    public ResponseEntity<?> getAllPosts() {
        return iPostService.getAllPosts();
    }

    @PostMapping("/")
    public ResponseEntity<?> createPost(@RequestBody RequestPostDto requestPostDto) {
        return iPostService.createPost(requestPostDto);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchPost(@PathVariable Long id, @RequestBody PatchPostDto postDto) {
        return iPostService.updatePost(id, postDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id) {
        return iPostService.deletePost(id);
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<?> getPostsByCategory(@PathVariable Long categoryId) {
        return iPostService.getPostByCategory(categoryId);
    }

    @PostMapping("/like/{id}")
    public ResponseEntity<?> likePost(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        return iPostService.likePost(id, token);
    }

    @DeleteMapping("/like/{id}")
    public ResponseEntity<?> unlikePost(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        return iPostService.likePost(id, token);
    }
}
