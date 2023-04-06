package com.main.blog.repository;

import com.main.blog.model.Follower;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFollowerRepository extends JpaRepository<Follower, Long> {
    Long countById(Long id);

    Long findByFollowerUserId(Long userId);
}
