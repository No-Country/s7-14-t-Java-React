package com.main.blog.dto;

import com.main.blog.model.enums.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class RequestUserDto {

    private String name;

    private String lastName;

    private String email;

    private UserStatus status;

    private String phone;

    private String password;
}
