package com.main.blog.controller;

import com.main.blog.dto.PatchPostDto;
import com.main.blog.dto.RequestPostDto;
import com.main.blog.service.interfaces.IPostService;

import com.main.blog.util.Mapper;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/posts")
@CrossOrigin("*")
public class PostController {
    @Autowired
    private Mapper mapper;

    @Autowired
    private IPostService iPostService;

    @Transactional(readOnly=true)
    @GetMapping("user/{userId}")
    public ResponseEntity<?> getUserPosts(@PathVariable Long userId) {
        return iPostService.getUserPosts(userId);
    }
    @Transactional(readOnly=true)
    @GetMapping("/{id}")
    public ResponseEntity<?> getPost(@PathVariable Long id) {
        return iPostService.getPostById(id);
    }
    @Transactional(readOnly=true)
    @GetMapping("/")
    public ResponseEntity<?> getAllPosts() {
        return iPostService.getAllPosts();
    }

    @PostMapping("/")
    public ResponseEntity<?> createPost(@RequestBody RequestPostDto requestPostDto, @RequestHeader("Authorization") String token) {
        return iPostService.createPost(requestPostDto, token);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchPost(@PathVariable Long id, @RequestBody PatchPostDto postDto) {
        return iPostService.updatePost(id, postDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id) {
        return iPostService.deletePost(id);
    }

    @GetMapping("/category/{categoryId}")
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
