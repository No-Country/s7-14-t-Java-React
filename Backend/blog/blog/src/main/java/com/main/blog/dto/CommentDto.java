package com.main.blog.dto;


import lombok.Data;

import java.util.Date;

@Data
public class CommentDto {

    private int id;

    private String content;

    private Date date;

    private ResponseUserDto user;
}
