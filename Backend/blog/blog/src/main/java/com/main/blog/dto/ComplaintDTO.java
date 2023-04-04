package com.main.blog.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class ComplaintDTO {

    private int id;

    private String reason;
}
