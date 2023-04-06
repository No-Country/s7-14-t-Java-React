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
        return ResponseEntity.status(HttpStatus.OK).body(iBlockRepository.findByBlockedUserId(userId));
    }

    @Override
    public ResponseEntity<?> addBlock(Long userId, String token) {
        User userToBlock = iUserRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User to block not found"));
        try {
            User userBlocking = iUserRepository.findByEmail(jwtService.extractUserEmail(token));
            if (userBlocking == null) {
                throw new ResourceNotFoundException("User not found");
            }
            Block block = Block.builder().blockedUser(userToBlock).blockingUser(userBlocking).build();
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(block, Block.class));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> deleteBlock(Long blockId) {
        try {
            Block block = iBlockRepository.findById(blockId).orElseThrow(() -> new ResourceNotFoundException("Not found"));
            iBlockRepository.delete(block);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("User unlocked");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
