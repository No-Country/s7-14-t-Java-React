package com.main.blog.exception;

public class AccessDeniedException extends RuntimeException{
    public AccessDeniedException() {
        super();
    }

    public AccessDeniedException(final String message) {
        super(message);
    }

    public AccessDeniedException(final String message, final Throwable cause) {
        super(message, cause);
    }
}
