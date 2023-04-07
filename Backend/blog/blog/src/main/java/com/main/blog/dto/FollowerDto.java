package com.main.blog.dto;


import lombok.Data;

@Data
public class FollowerDto {

    private Long id;

    private ResponseUserDto followerUser;

    private ResponseUserDto followedUser;
}
