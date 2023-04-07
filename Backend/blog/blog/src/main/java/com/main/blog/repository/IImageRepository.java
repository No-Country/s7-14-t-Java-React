package com.main.blog.repository;

import com.main.blog.model.Image;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IImageRepository extends JpaRepository<Image, Long> {
    Image save(Image image);
}
