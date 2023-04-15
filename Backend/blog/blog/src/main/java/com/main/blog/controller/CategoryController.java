package com.main.blog.controller;


import com.main.blog.dto.RequestCategoryDto;
import com.main.blog.service.interfaces.ICategoryService;

import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private Mapper mapper;

    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/")
    public ResponseEntity<?> getAllCategories() {
        return iCategoryService.getAllCategories();
    }

    @PostMapping("/")
    public ResponseEntity<?> postCategory(@RequestBody RequestCategoryDto categoryDto) {
        return iCategoryService.postCategory(categoryDto);
    }
    @PatchMapping("/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Long id, @RequestBody RequestCategoryDto categoryDto) {
        return iCategoryService.updateCategory(id, categoryDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        return iCategoryService.deleteCategory(id);
    }
}
