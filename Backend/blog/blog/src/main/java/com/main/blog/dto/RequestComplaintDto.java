package com.main.blog.dto;

import com.main.blog.model.enums.ReasonComplaint;
import com.main.blog.model.enums.StatusComplaint;
import lombok.Data;

@Data
public class RequestComplaintDto {

    private ReasonComplaint reason;

    private String description;

}
