package com.main.blog.service.interfaces;

import com.main.blog.dto.CommentDto;
import com.main.blog.exception.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;

import java.util.Set;

public interface ICommentService {
    ResponseEntity<?> postComment(CommentDto commentDto, Long postId, String token);

    ResponseEntity<Set<CommentDto>> getAllByPostId(Long postId);

    ResponseEntity<?> delete(Long commentId) throws ResourceNotFoundException;
}
