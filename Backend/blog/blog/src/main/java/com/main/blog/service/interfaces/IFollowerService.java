package com.main.blog.service.interfaces;

import org.springframework.http.ResponseEntity;

public interface IFollowerService {
    ResponseEntity<?> getUserFollowers(Long userId);

    ResponseEntity<?> getCountFollowers(Long userId);

    ResponseEntity<?> subscribeFollower(Long userId, String token);

    ResponseEntity<?> unsubscribeFollower(Long followerId, String token);
}
