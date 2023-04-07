package com.main.blog.controller;


import com.main.blog.service.interfaces.ICategoryService;

import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private Mapper mapper;

    @Autowired
    private ICategoryService iCaregoryService;
    @GetMapping("")
    public ResponseEntity<?> getAllCategories() {
        return iCaregoryService.getAllCategories();
    }
}
