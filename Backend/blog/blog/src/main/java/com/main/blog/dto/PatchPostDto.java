package com.main.blog.dto;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class PatchPostDto {

    private String text;

    private List<ImageDto> images;

    private List<HashtagDto> hashtag;

}
