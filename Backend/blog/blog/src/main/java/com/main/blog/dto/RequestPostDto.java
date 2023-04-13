package com.main.blog.dto;


import lombok.Data;

import java.util.List;

@Data
public class RequestPostDto {

    private String text;

    private List<ImageDto> images;

    private List<HashtagDto> hashtag;

    private RequestCategoryDto category;

}
