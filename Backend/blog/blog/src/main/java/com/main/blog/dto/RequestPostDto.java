package com.main.blog.dto;


import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class RequestPostDto {
    private String text;

    private List<ImageDto> images;

    private Date date = new Date();
    private List<HashtagDto> hashtag;

    private ResponseCategoryDto category;
}
