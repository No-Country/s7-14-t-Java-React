package com.main.blog.repository;

import com.main.blog.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ICategoryRepository extends JpaRepository<Category, Long> {

    Category save(Category category);

    List<Category> findAll();
    Category findByName(String name);
}
