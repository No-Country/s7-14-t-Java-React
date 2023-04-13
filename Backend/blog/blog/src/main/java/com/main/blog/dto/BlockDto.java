package com.main.blog.dto;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

@Data
public class BlockDto {

    private Long id;

    private ResponseUserDto blockingUser;

    @JsonIgnore
    private ResponseUserDto blockedUser;
}
