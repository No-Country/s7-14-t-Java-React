package com.main.blog.repository;

import com.main.blog.model.Follower;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface IFollowerRepository extends JpaRepository<Follower, Long> {
    Long countById(Long id);

    Set<Follower> findByFollowerUserId(Long userId);

    Follower findByFollowedUserIdAndFollowerUserId(Long followedUserId, Long followerUserId);
}
