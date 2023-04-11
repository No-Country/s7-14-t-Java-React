package com.main.blog.service.interfaces;

import com.main.blog.dto.RequestPostDto;
import com.main.blog.dto.UserIdDto;
import org.springframework.http.ResponseEntity;


public interface IPostService {
    ResponseEntity<?> getPostById(Long id);

    ResponseEntity<?> createPost(RequestPostDto post);


    ResponseEntity<?> deletePost(Long id);

    ResponseEntity<?> updatePost(Long id, RequestPostDto post);

    ResponseEntity<?> getAllPosts();

    ResponseEntity<?> getPostByCategory(Long categoryId);

    ResponseEntity<?> likePost(Long id, UserIdDto userIdDto);

    ResponseEntity<?> unlikePost(Long id, UserIdDto userIdDto);
}
