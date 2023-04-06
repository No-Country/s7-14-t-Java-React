package com.main.blog.service;

import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.model.Block;
import com.main.blog.model.Follower;
import com.main.blog.model.User;
import com.main.blog.repository.IFollowerRepository;
import com.main.blog.repository.IUserRepository;
import com.main.blog.service.interfaces.IFollowerService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class FollowerService implements IFollowerService {

    @Autowired
    private IFollowerRepository iFollowerRepository;

    @Autowired
    IUserRepository iUserRepository;

    @Autowired
    JwtService jwtService;

    @Autowired
    Mapper mapper;

    @Override
    public ResponseEntity<?> getUserFollowers(Long userId) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iFollowerRepository.findByFollowerUserId(userId));
    }

    @Override
    public ResponseEntity<?> getCountFollowers(Long userId) {
        return ResponseEntity.status(HttpStatus.OK).body(iFollowerRepository.countById(userId));
    }

    @Override
    public ResponseEntity<?> subscribeFollower(Long userId, String token) {
        User userToFollow = iUserRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User to follow not found"));
        try {
            User userFollowing = iUserRepository.findByEmail(jwtService.extractUserEmail(token));
            if (userFollowing == null) {
                throw new ResourceNotFoundException("User not found");
            }
            Follower follower = Follower.builder().followedUser(userToFollow).followerUser(userFollowing).build();
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(follower, Follower.class));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> unsubscribeFollower(Long followerId) {
        try {
            Follower follower = iFollowerRepository.findById(followerId).orElseThrow(() -> new ResourceNotFoundException("Not found"));
            iFollowerRepository.delete(follower);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("User unsubscribed");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
