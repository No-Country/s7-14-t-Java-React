package com.main.blog.repository;

import com.main.blog.model.Role;
import com.main.blog.model.enums.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Role, Long> {
    Boolean existsByName(RoleName roleName);

    Role findByName(RoleName roleName);
}
