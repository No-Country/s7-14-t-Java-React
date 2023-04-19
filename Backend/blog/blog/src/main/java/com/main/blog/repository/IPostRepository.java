package com.main.blog.repository;

import com.main.blog.model.Post;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


@Transactional
public interface IPostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCategoryId(Long categoryId);

    List<Post> findByUserId(Long userId);
}
