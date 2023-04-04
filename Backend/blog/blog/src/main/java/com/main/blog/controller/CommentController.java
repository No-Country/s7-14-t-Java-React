package com.main.blog.controller;


import com.main.blog.service.CommentService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@Controller
public class CommentController {

    @Autowired
    private Mapper mapper;
    @Autowired
    private CommentService commentService;

    @Autowired
    private JWTutil jwt;


    @PostMapping("/new/{publicationId}")
    public ResponseEntity create (@RequestHeader(value = "Authorization") String token,
                                  @PathVariable Integer publicationId
                                  @RequestBody CommentDto dto){

            return new ResponseEntity(comment, HttpStatus.CREATED);

    }

}
