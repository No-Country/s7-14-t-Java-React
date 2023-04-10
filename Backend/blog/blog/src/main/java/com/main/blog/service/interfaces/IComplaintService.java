package com.main.blog.service.interfaces;

import com.main.blog.dto.ComplaintDto;
import com.main.blog.model.enums.StatusComplaint;
import org.springframework.http.ResponseEntity;

public interface IComplaintService {
    ResponseEntity<?> postComplaint(Long userId, String token, ComplaintDto complaintDTO);

    ResponseEntity<?> getAll();

    ResponseEntity<?> resolveComplaint(Long id, StatusComplaint status);
}
