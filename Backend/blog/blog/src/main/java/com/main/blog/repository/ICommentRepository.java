package com.main.blog.repository;

import com.main.blog.model.Comment;
import com.main.blog.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface ICommentRepository extends JpaRepository<Comment, Integer> {

    Set<Comment> findByPost_Id(Long postId);
}
