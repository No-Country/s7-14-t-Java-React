package com.main.blog.repository;

import com.main.blog.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IComplaintRepository extends JpaRepository<Complaint,Long> {
}
