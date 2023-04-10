package com.main.blog.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StatusComplaint {

    DENIED("Complaint has been denied"),
    ACCEPTED("Complaint has been accepted"),
    NOT_ANALYZED("Complaint has not been analyzed yet");
    private final String status;
}
