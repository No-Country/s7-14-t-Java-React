package com.main.blog.dto;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class ResponsePostDto {

    private String text;

    private List<ImageDto> images;

    private Date date;

    private List<HashtagDto> hashtag;

    private ResponseCategoryDto category;
}
