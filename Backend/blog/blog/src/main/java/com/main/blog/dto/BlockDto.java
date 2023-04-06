package com.main.blog.dto;


import lombok.Data;

@Data
public class BlockDto {

    private Long id;

    private ResponseUserDto blockingUser;

    private ResponseUserDto blockedUser;
}
