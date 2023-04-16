package com.main.blog.repository;

import com.main.blog.model.Image;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

@Transactional
public interface IImageRepository extends JpaRepository<Image, Long> {

}
