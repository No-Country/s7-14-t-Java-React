package com.main.blog.service.interfaces;

import com.main.blog.dto.ComplaintDto;
import com.main.blog.dto.RequestComplaintDto;
import com.main.blog.dto.ResolveComplaintDto;
import com.main.blog.model.enums.StatusComplaint;
import org.springframework.http.ResponseEntity;

public interface IComplaintService {
    ResponseEntity<?> postComplaint(Long userId, String token, RequestComplaintDto complaintDTO);

    ResponseEntity<?> getAll();

    ResponseEntity<?> getComplaint(Long id);

    ResponseEntity<?> resolveComplaint(Long id, ResolveComplaintDto status);
}
