package com.main.blog.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class ResponseUserDto {

    private String name;

    private String lastName;

    private String email;

    private String state;

    private String phone;
}
