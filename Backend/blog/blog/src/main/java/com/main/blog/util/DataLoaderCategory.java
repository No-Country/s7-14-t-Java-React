package com.main.blog.util;

import com.main.blog.dto.RequestCategoryDto;
import com.main.blog.dto.ResponseCategoryDto;
import com.main.blog.model.Category;
import com.main.blog.service.interfaces.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.Base64;

@Component
@Profile("!test")
public class DataLoaderCategory implements CommandLineRunner {


    @Autowired
    private ICategoryService categoryService;

    @Autowired
    private Mapper mapper;


    @Override
    public void run(String... args) throws Exception {
        Category category = Category.builder().name("Cocina").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Videojuegos").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Viajes").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Deportes").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Negocios").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Politica").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Televisión").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Cine").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Fitness").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Moda").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Música").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

        category = Category.builder().name("Celebridades").description("Todas las ñañas que se refieran a los deportes van aca").build();
        categoryService.postCategory(mapper.getMapper().map(category, RequestCategoryDto.class)).getBody();

    }
}