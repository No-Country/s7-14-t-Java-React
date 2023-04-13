package com.main.blog.repository;

import com.main.blog.model.Image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

public interface IImageRepository extends JpaRepository<Image, Long> {

}
