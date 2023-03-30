package com.main.blog.service.interfaces;

import com.main.blog.exception.ResourceFoundException;
import com.main.blog.model.Role;
import com.main.blog.model.enums.RoleName;
import org.springframework.http.ResponseEntity;

public interface IRoleService {
    Role findByName(RoleName roleUser);

    ResponseEntity<?> postRole(Role role);

    Role createRole(Role role) throws ResourceFoundException;
}
