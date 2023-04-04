package com.main.blog.dto;


import jakarta.persistence.Column;
import lombok.Data;

import java.util.Date;

@Data
public class CommentDTO {

    private int id;

    private String content;

    private Date date;
}
