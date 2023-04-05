package com.main.blog.service.interfaces;

import org.springframework.http.ResponseEntity;

public interface ICategoryService {
    ResponseEntity<?> getAllCategories();
}
