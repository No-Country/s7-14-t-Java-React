package com.main.blog.repository;

import com.main.blog.model.Hashtag;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IHashtagRepository extends JpaRepository<Hashtag, Long> {
    Hashtag findByName(String name);

    List<Hashtag> findAll();
    Hashtag save(Hashtag hashtag);



}
