package com.main.blog.util;


import com.main.blog.model.Role;
import com.main.blog.model.enums.RoleName;
import com.main.blog.service.interfaces.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;


@Component
@Profile("!test")
public class DataLoaderRole implements CommandLineRunner {

    @Autowired
    private IRoleService roleService;


    @Override
    public void run(String... args) throws Exception {
        Role role;
        role = Role.builder()
                .name(RoleName.ROLE_ADMIN).description("Rol de administrador").build();
        roleService.createRole(role);

        role = Role.builder()
                .name(RoleName.ROLE_USER).description("Rol de administrador").build();
        roleService.createRole(role);
    }
}