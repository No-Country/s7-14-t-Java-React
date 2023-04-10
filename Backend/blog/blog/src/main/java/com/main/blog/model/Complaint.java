package com.main.blog.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.main.blog.model.enums.ReasonComplaint;
import com.main.blog.model.enums.StatusComplaint;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Getter
@Setter
@Entity
@Builder
@Table(name = "complaints")
@NoArgsConstructor
@AllArgsConstructor
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(name = "reason", nullable = false)
    @Enumerated(EnumType.STRING)
    private ReasonComplaint reason;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JsonIgnore
    @JoinColumn(name = "user_reported_id")
    private User userReported;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "reporting_user_id")
    private User reportingUser;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private StatusComplaint status;

    @Column(name = "description")
    private String description;

    @CreationTimestamp
    @Column(name = "date")
    private Date date;
}
