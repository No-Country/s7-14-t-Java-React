package com.main.blog.exception;

public class ForbiddenFollowException extends RuntimeException {
    public ForbiddenFollowException() {
        super();
    }

    public ForbiddenFollowException(final String message) {
        super(message);
    }

    public ForbiddenFollowException(final String message, final Throwable cause) {
        super(message, cause);
    }
}
