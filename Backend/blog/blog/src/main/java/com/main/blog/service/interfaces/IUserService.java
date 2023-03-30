package com.main.blog.service.interfaces;

import com.main.blog.dto.RequestUserDto;
import org.springframework.http.ResponseEntity;

public interface IUserService {
    ResponseEntity<?> getAll();

    ResponseEntity<?> getUser(Long id);

    ResponseEntity<?> deleteUser(Long id,String token);

}
