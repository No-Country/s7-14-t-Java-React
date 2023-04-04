package com.main.blog.service;

import com.main.blog.model.Category;
import com.main.blog.repository.ICategoryRepository;
import com.main.blog.service.interfaces.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository iCategoryRepository;
    @Override
    public ResponseEntity<?> getAllCategories() {
        List<Category> categories = iCategoryRepository.findAll();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(categories);
    }
}
