package com.main.blog.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "text")
    private String text;

    @Column(name = "date", nullable = false)
    private Date date;


    @OneToMany( cascade=CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "post_id",referencedColumnName = "id")
    private List<Image> images= new ArrayList<>();

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(name = "post_hashtag",
           joinColumns = @JoinColumn(name = "post_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "hashtag_id", referencedColumnName = "id")
    )
    private List<Hashtag> hashtag;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "category_id")
    private Category category;



}
