package com.main.blog.dto;

import com.main.blog.model.enums.ReasonComplaint;
import com.main.blog.model.enums.StatusComplaint;
import jakarta.persistence.Column;
import lombok.Data;

@Data
public class ComplaintDto {

    private int id;

    private ReasonComplaint reason;

    private StatusComplaint status;

    private String description;
}
