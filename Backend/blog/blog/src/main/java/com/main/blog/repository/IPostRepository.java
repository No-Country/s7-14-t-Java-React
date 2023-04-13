package com.main.blog.repository;

import com.main.blog.model.Post;


import com.main.blog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;


public interface IPostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCategoryId(Long categoryId);

    Set<Post> findByUserId(Long userId);
}
