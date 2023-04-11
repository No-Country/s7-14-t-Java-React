package com.main.blog.dto;

import com.main.blog.model.enums.UserStatus;
import jakarta.persistence.Column;
import lombok.Data;

@Data
public class ResponseUserDto {

    private String name;

    private String lastName;

    private String email;

    private UserStatus status;

    private String phone;

    private String avatar;

    private String token;
}
