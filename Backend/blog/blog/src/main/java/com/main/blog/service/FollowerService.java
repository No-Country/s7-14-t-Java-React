package com.main.blog.service;

import com.main.blog.dto.FollowerDto;
import com.main.blog.exception.ForbiddenFollowException;
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

import java.util.Set;
import java.util.stream.Collectors;

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
        Set<FollowerDto> followers = iFollowerRepository.findByFollowerUserId((userId)).stream().map(follower -> mapper.getMapper().map(follower, FollowerDto.class)).collect(Collectors.toSet());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(followers);
    }

    @Override
    public ResponseEntity<?> getCountFollowers(Long userId) {
        return ResponseEntity.status(HttpStatus.OK).body(iFollowerRepository.countById(userId));
    }

    @Override
    public ResponseEntity<?> subscribeFollower(Long userId, String token) {
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        try {
            User userToFollow = iUserRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User to follow not found"));
            User userFollowing = iUserRepository.findByEmail(jwtService.extractUserEmail(token));
            if (userFollowing == null) {
                throw new ResourceNotFoundException("User not found");
            }
            if (userToFollow.equals(userFollowing)) {
                throw new ForbiddenFollowException("A user cannot follow itself");
            }
            if (iFollowerRepository.findByFollowedUserIdAndFollowerUserId(userToFollow.getId(), userFollowing.getId()) != null) {
                throw new ForbiddenFollowException("A user can just follow once");
            }
            Follower follower = Follower.builder().followedUser(userToFollow).followerUser(userFollowing).build();
            iFollowerRepository.save(follower);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(follower, FollowerDto.class));
        } catch (ResourceNotFoundException | ForbiddenFollowException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> unsubscribeFollower(Long userFollowedId, String token) {
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        try {
            User userFollowing = iUserRepository.findByEmail(jwtService.extractUserEmail(token));
            User userFollowed = iUserRepository.findById(userFollowedId).orElseThrow(() -> new ResourceNotFoundException("Not found"));
            iFollowerRepository.delete(iFollowerRepository.findByFollowedUserIdAndFollowerUserId(userFollowed.getId(), userFollowing.getId()));
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("User unsubscribed");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
