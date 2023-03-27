package com.main.blog.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum RoleName {
    ROLE_ADMIN("administrador"),

    ROLE_USER("user");

    private final String name;
}
