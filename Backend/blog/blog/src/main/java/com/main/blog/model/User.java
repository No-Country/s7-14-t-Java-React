package com.main.blog.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
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

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Follower> followers = new ArrayList<Follower>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Complaint> denuncias = new ArrayList<Complaint>(); //user_denuncia

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Banned> banneds = new ArrayList<Banned>();
}
