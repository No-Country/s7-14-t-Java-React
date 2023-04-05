package com.main.blog.service.interfaces;

import com.main.blog.dto.RequestPostDto;
import com.main.blog.model.Post;
import org.springframework.http.ResponseEntity;


public interface IPostService {
    ResponseEntity<?> getPostById(Long id);

    ResponseEntity<?> createPost(RequestPostDto post);


    ResponseEntity<?> deletePost(Long id);

    ResponseEntity<?> updatePost(Long id, Post post);

    ResponseEntity<?> getAllPosts();

}