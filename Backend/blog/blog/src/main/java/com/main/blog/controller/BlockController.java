package com.main.blog.controller;


import com.main.blog.service.interfaces.IBlockService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/blocks")
@CrossOrigin("*")
public class BlockController {

    @Autowired
    private Mapper mapper;

    @Autowired
    IBlockService blockService;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserBans(@PathVariable Long userId) {
        return blockService.getUserBans(userId);
    }

    @PostMapping("/{userId}")
    public ResponseEntity<?> addBlock(@PathVariable Long userId, @RequestHeader("Authorization") String token) {
        return blockService.addBlock(userId, token);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteBlock(@PathVariable Long userId, @RequestHeader ("Authorization")String token) {
        return blockService.deleteBlock(userId, token);
    }

}
