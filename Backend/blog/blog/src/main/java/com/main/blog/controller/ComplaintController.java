package com.main.blog.controller;


import com.main.blog.dto.ComplaintDto;
import com.main.blog.model.enums.StatusComplaint;
import com.main.blog.service.interfaces.IComplaintService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/complaints")
public class ComplaintController {

    @Autowired
    private Mapper mapper;

    @Autowired
    IComplaintService complaintService;

    @GetMapping("/")
    public ResponseEntity<?> getAll() {
        return complaintService.getAll();
    }

    @PostMapping("/{userId}")
    public ResponseEntity<?> postComplaint(@PathVariable Long userId, @RequestHeader("Authorization") String token, @RequestBody ComplaintDto complaintDTO) {
        return complaintService.postComplaint(userId, token, complaintDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> resolveComplaint(@PathVariable Long id, StatusComplaint status) {
        return complaintService.resolveComplaint(id, status);
    }
}
