package com.main.blog.dto;

import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
public class ResponsePostDto {

    private Long id;

    private String text;

    private String title;

    private List<ImageDto> images;

    private Date date;

    private List<HashtagDto> hashtag;

    private ResponseCategoryDto category;

    private ResponseUserDto user;

    private Long countLikes;

}
