package com.main.blog.controller;

import com.main.blog.service.interfaces.IFollowerService;
import com.main.blog.util.Mapper;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/followers")
public class FollowerController {

    @Autowired
    private Mapper mapper;
    @Autowired
    IFollowerService followerService;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserFollowers(@PathVariable Long userId) {
        return followerService.getUserFollowers(userId);
    }

    @GetMapping("/count/{userId}")
    public ResponseEntity<?> getCountFollowers(@PathVariable Long userId) {
        return followerService.getCountFollowers(userId);
    }

    @PostMapping("/{userId}")
    public ResponseEntity<?> subscribeFollower(@PathVariable Long userId, @RequestHeader("Authorization") String token) {
        return followerService.subscribeFollower(userId, token);
    }

    @DeleteMapping("/{userFollowedId}")
    public ResponseEntity<?> unsubscribeFollower(@PathVariable Long userFollowedId, @RequestHeader("Authorization") String token) {
        return followerService.unsubscribeFollower(userFollowedId, token);
    }
}
