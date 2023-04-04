package com.main.blog.service;


import com.main.blog.dto.CommentDTO;
import com.main.blog.dto.RequestUserDto;
import com.main.blog.dto.ResponseUserDto;
import com.main.blog.exception.ResourceFoundException;
import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.model.Comment;
import com.main.blog.model.Post;
import com.main.blog.model.Role;
import com.main.blog.model.User;
import com.main.blog.model.enums.RoleName;
import com.main.blog.repository.ICommentRepository;
import com.main.blog.util.Mapper;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cassandra.CassandraProperties;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CommentService {

    @Autowired
    private Mapper mapper;
    @Autowired
    private ICommentRepository icommentRepository;
    @Autowired
    private PostService publicationService;
    @Autowired
    private UserService userService;



    public Comment register(CommentDTO comment, Integer postId, Integer userId){
        Comment c = mapper.getMapper().map(comment, postId, userId);
        c = icommentRepository.save(c);
        return c;

    }


    public List<CommentDTO> retrieveAll(Integer postId) {
        List<Comment> comments = icommentRepository.retrieveAllCommentsOfAPost(postId);
        List commentDtoList = new ArrayList<>();
        comments.forEach(c -> commentDtoList.add(mapper.getMapper()));
        return commentDtoList;


    }
    
    public void delete(Integer id) throws ResourceNotFoundException {
        try {
            icommentRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("No se pudo eliminar el commentario porque el id ingresando no existe.");
        }
    }


}
