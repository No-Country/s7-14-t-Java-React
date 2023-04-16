package com.main.blog.controller;


import com.main.blog.dto.ComplaintDto;
import com.main.blog.dto.RequestComplaintDto;
import com.main.blog.dto.ResolveComplaintDto;
import com.main.blog.model.enums.StatusComplaint;
import com.main.blog.service.interfaces.IComplaintService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/complaints")
@CrossOrigin("*")
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
    public ResponseEntity<?> postComplaint(@PathVariable Long userId, @RequestHeader("Authorization") String token, @RequestBody RequestComplaintDto complaintDTO) {
        return complaintService.postComplaint(userId, token, complaintDTO);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> resolveComplaint(@PathVariable Long id, @RequestBody ResolveComplaintDto status) {
        return complaintService.resolveComplaint(id, status);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getComplaint(@PathVariable Long id) {
        return complaintService.getComplaint(id);
    }
}
