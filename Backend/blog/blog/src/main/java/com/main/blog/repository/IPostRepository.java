package com.main.blog.repository;

import com.main.blog.model.Post;


import com.main.blog.model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;


@Transactional
public interface IPostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCategoryId(Long categoryId);

    List<Post> findByUserId(Long userId);
}
