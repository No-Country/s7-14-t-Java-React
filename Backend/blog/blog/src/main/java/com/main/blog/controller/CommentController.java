package com.main.blog.controller;


import com.main.blog.dto.CommentDto;
import com.main.blog.service.CommentService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/comments")
@CrossOrigin("*")
public class CommentController {

    @Autowired
    private Mapper mapper;
    @Autowired
    private CommentService commentService;


    @PostMapping("/new/{postId}")
    public ResponseEntity<?> create(@RequestHeader(value = "Authorization") String token,
                                    @PathVariable Long postId,
                                    @RequestBody CommentDto commentDto) {
        return commentService.postComment(commentDto, postId, token);
    }

    @GetMapping("/{postId}")
    public ResponseEntity<?> getByPostId(@PathVariable Long postId) {
        return commentService.getAllByPostId(postId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        return commentService.delete(id);
    }
}
