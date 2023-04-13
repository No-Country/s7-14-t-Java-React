package com.main.blog.service;


import com.main.blog.dto.ComplaintDto;
import com.main.blog.dto.RequestComplaintDto;
import com.main.blog.dto.ResolveComplaintDto;
import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.model.Complaint;
import com.main.blog.model.User;
import com.main.blog.model.enums.StatusComplaint;
import com.main.blog.repository.IComplaintRepository;
import com.main.blog.repository.IUserRepository;
import com.main.blog.service.interfaces.IComplaintService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ComplaintService implements IComplaintService {


    @Autowired
    IComplaintRepository iComplaintRepository;

    @Autowired
    IUserRepository iUserRepository;

    @Autowired
    JwtService jwtService;

    @Autowired
    Mapper mapper;

    @Override
    public ResponseEntity<?> postComplaint(Long userId, String token, RequestComplaintDto complaintDTO) {
        try {
            User userReported = iUserRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User to report not found"));
            if (token.startsWith("Bearer ")) {
                token = token.substring(7);
            }
            User reportingUser = iUserRepository.findByEmail(jwtService.extractUserEmail(token));
            if (reportingUser == null) {
                throw new ResourceNotFoundException("User not found");
            }
            Complaint complaint = Complaint.builder().description(complaintDTO.getDescription()).reason(complaintDTO.getReason()).reportingUser(reportingUser).userReported(userReported).status(StatusComplaint.NOT_ANALYZED).build();
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(iComplaintRepository.save(complaint), ComplaintDto.class));

        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> getAll() {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iComplaintRepository.findAll());
    }

    @Override
    public ResponseEntity<?> getComplaint(Long id) {
        try {
            Complaint complaint = iComplaintRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Complaint not found"));
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(complaint);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> resolveComplaint(Long id, ResolveComplaintDto status) {
        try {
            Complaint complaint = iComplaintRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Complaint not found"));

            complaint.setStatus(StatusComplaint.valueOf(status.getStatus()));
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(iComplaintRepository.save(complaint));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
