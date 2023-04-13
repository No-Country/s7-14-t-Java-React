package com.main.blog.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.main.blog.model.enums.UserStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "state")
    @Enumerated(EnumType.STRING)
    private UserStatus status;

    @Column(name = "phone")
    private String phone;

    @Column(name = "avatar")
    private String avatar;

    @CreationTimestamp
    @Column(name = "creationDate")
    private Date creationDate;

    @UpdateTimestamp
    @Column(name = "updateDate")
    private Date updateDate;

    @Column(name = "softDelete")
    private boolean softDelete;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @JsonIgnore
    @OneToMany(mappedBy = "followerUser", cascade = CascadeType.ALL)
    private List<Follower> followers = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "followedUser", cascade = CascadeType.ALL)
    private List<Follower> follows = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "userReported", cascade = CascadeType.ALL)
    private List<Complaint> complaintsToTheUser = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "reportingUser", cascade = CascadeType.ALL)
    private List<Complaint> userComplaints = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "blockingUser", cascade = CascadeType.ALL)
    private List<Block> blockUsers = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "blockedUser", cascade = CascadeType.ALL)
    private List<Block> blockedUsers = new ArrayList<>();
}
