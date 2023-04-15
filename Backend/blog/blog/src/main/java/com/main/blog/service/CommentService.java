package com.main.blog.service;


import com.main.blog.dto.CommentDto;
import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.model.Comment;
import com.main.blog.model.User;
import com.main.blog.repository.ICommentRepository;
import com.main.blog.repository.IPostRepository;
import com.main.blog.repository.IUserRepository;
import com.main.blog.service.interfaces.ICommentService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CommentService implements ICommentService {

    @Autowired
    private Mapper mapper;
    @Autowired
    private ICommentRepository iCommentRepository;
    @Autowired
    private PostService publicationService;
    @Autowired
    private IPostRepository iPostRepository;
    @Autowired
    private IUserRepository iUserRepository;

    @Autowired
    JwtService jwtservice;

    @Override
    public ResponseEntity<?> postComment(CommentDto commentDto, Long postId, String token) {
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        try {
            Comment comment = mapper.getMapper().map(commentDto, Comment.class);
            User user = iUserRepository.findByEmail(jwtservice.extractUserEmail(token));
            if (user == null) {
                throw new ResourceNotFoundException("User not found");
            }
            comment.setUser(user);
            comment.setPost(iPostRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post not found")));
            return ResponseEntity.status(HttpStatus.OK).body(iCommentRepository.save(comment));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<Set<CommentDto>> getAllByPostId(Long postId) {
        Set<Comment> comments = iCommentRepository.findByPost_Id(postId);
        Set<CommentDto> commentsDto = comments.stream().map(comment ->
                mapper.getMapper().map(comment, CommentDto.class)).collect(Collectors.toSet());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(commentsDto);
    }

    @Override
    public ResponseEntity<?> delete(Long commentId) throws ResourceNotFoundException {
        try {
            Comment comment = iCommentRepository.findById(Math.toIntExact(commentId)).orElseThrow(() -> new ResourceNotFoundException("Comment doesn't exist"));
            iCommentRepository.delete(comment);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(comment);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }


}
