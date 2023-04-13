package com.main.blog.repository;

import com.main.blog.model.Post;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface IPostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCategoryId(Long categoryId);

}
