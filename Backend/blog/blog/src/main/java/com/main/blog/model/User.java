package com.main.blog.model;

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
    private String state;

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


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Follower> followers = new ArrayList<Follower>();


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Complaint> complaints = new ArrayList<Complaint>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Banned> banneds = new ArrayList<Banned>();
}
