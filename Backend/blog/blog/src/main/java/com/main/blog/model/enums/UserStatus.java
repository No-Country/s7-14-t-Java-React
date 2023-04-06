package com.main.blog.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserStatus {
    BANNED("User is Banned"),

    NORMAL("User is not Banned");
    private final String status;
}
