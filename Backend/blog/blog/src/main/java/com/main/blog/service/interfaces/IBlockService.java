package com.main.blog.service.interfaces;

import org.springframework.http.ResponseEntity;

public interface IBlockService {
    ResponseEntity<?> getUserBans(Long userId);

    ResponseEntity<?> addBlock(Long userId, String token);

    ResponseEntity<?> deleteBlock(Long userId, String token);
}
