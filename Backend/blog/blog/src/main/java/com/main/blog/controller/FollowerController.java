package com.main.blog.controller;

import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class FollowerController {

    @Autowired
    private Mapper mapper;
}
