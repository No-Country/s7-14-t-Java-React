package com.main.blog.service.interfaces;

import com.main.blog.dto.RequestCategoryDto;
import org.springframework.http.ResponseEntity;

public interface ICategoryService {

    ResponseEntity<?> getAllCategories();

    ResponseEntity<?> deleteCategory(Long id);

    ResponseEntity<?> updateCategory(Long id, RequestCategoryDto categoryDto);

    ResponseEntity<?> postCategory(RequestCategoryDto categoryDto);
}
