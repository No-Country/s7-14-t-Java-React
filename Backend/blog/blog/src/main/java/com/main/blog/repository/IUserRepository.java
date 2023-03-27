package com.main.blog.repository;

import com.main.blog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<Long, User> {
    Optional<User> findOptionalByEmail(String email);
}
