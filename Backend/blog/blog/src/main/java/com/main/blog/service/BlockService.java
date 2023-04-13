package com.main.blog.service;


import com.main.blog.dto.BlockDto;
import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.model.Block;
import com.main.blog.model.User;
import com.main.blog.repository.IBlockRepository;
import com.main.blog.repository.IUserRepository;
import com.main.blog.service.interfaces.IBlockService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BlockService implements IBlockService {

    @Autowired
    IBlockRepository iBlockRepository;

    @Autowired
    IUserRepository iUserRepository;

    @Autowired
    JwtService jwtService;

    @Autowired
    Mapper mapper;

    @Override
    public ResponseEntity<?> getUserBans(Long userId) {
        Set<BlockDto> blocks = iBlockRepository.findByBlockingUserId(userId).stream().map(block -> mapper.getMapper().map(block, BlockDto.class)).collect(Collectors.toSet());
        return ResponseEntity.status(HttpStatus.OK).body(blocks);
    }

    @Override
    public ResponseEntity<?> addBlock(Long userId, String token) {
        try {
            if (token.startsWith("Bearer ")) {
                token = token.substring(7);
            }
            User userToBlock = iUserRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User to block not found"));
            User userBlocking = iUserRepository.findByEmail(jwtService.extractUserEmail(token));
            if (userBlocking == null) {
                throw new ResourceNotFoundException("User not found");
            }
            Block block = Block.builder().blockedUser(userToBlock).blockingUser(userBlocking).build();
            iBlockRepository.save(block);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(block, BlockDto.class));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> deleteBlock(Long userId, String token) {
        try {
            if (token.startsWith("Bearer ")) {
                token = token.substring(7);
            }
            User userBlocked = iUserRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User to block not found"));
            User userBlocking = iUserRepository.findByEmail(jwtService.extractUserEmail(token));
            if (userBlocking == null) {
                throw new ResourceNotFoundException("User not found");
            }
            Block block = iBlockRepository.findByBlockedUserIdAndBlockingUserId(userBlocked.getId(), userBlocking.getId());
            iBlockRepository.delete(block);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("User unlocked");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
