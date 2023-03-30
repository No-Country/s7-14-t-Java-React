package com.main.blog.service;

import com.main.blog.exception.ResourceFoundException;
import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.model.Role;
import com.main.blog.model.enums.RoleName;
import com.main.blog.repository.IRoleRepository;
import com.main.blog.service.interfaces.IRoleService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class RoleService implements IRoleService {
    @Autowired
    private Mapper mapper;

    @Autowired
    private IRoleRepository iRoleRepository;

    @Override
    public Role findByName(RoleName roleName) {
        Role role = iRoleRepository.findByName(roleName);
        if (role == null) {
            throw new ResourceNotFoundException("Role not found");
        }
        return role;
    }

    @Override
    public ResponseEntity<?> postRole(Role role) {
        if (iRoleRepository.existsByName(role.getName())) {
            throw new ResourceFoundException("Role already exists");
        }
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iRoleRepository.save(role));
    }

    @Override
    public Role createRole(Role role) throws ResourceFoundException {
        if (iRoleRepository.existsByName(role.getName())) {
            throw new ResourceFoundException("Role already exists");
        }
        return iRoleRepository.save(role);
    }

}
