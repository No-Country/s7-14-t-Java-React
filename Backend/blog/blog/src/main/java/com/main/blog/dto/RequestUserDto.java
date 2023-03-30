package com.main.blog.dto;

import lombok.Data;

@Data
public class RequestUserDto {

    private String name;

    private String lastName;

    private String email;

    private String state;

    private String phone;

    private String password;
}
