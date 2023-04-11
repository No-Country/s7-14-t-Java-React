package com.main.blog.controller;

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

    @GetMapping("")
    public ResponseEntity<?> getAllPosts() {
        return iPostService.getAllPosts();
    }

    @PostMapping("")
    public ResponseEntity<?> createPost(@RequestBody RequestPostDto requestPostDto) {
        return iPostService.createPost(requestPostDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id) {
        return iPostService.deletePost(id);
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<?> getPostsByCategory(@PathVariable Long categoryId) {
        return iPostService.getPostByCategory(categoryId);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchPost(@PathVariable Long id, @RequestBody RequestPostDto requestPostDto) {
        return iPostService.updatePost(id, requestPostDto);
    }

    @PostMapping("/{id}")
    public ResponseEntity<?> likePost(@PathVariable Long id, @RequestBody UserIdDto userIdDto) {
        return iPostService.likePost(id, userIdDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> unlikePost(@PathVariable Long id, @RequestBody UserIdDto userIdDto) {
        return iPostService.unlikePost(id, userIdDto);
    }
}
