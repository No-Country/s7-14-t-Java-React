package com.main.blog.repository;


import com.main.blog.model.Block;
import com.main.blog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface IBlockRepository extends JpaRepository<Block, Long> {
    Set<Block> findByBlockingUserId(Long userId);

    Block findByBlockedUserIdAndBlockingUserId(Long blockedUserId, Long blockingUserId);
}
