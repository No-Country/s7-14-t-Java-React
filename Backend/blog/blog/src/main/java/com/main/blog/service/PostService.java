package com.main.blog.service;

import com.main.blog.dto.HashtagDto;
import com.main.blog.dto.ImageDto;
import com.main.blog.dto.RequestPostDto;
import com.main.blog.dto.UserIdDto;
import com.main.blog.model.Category;
import com.main.blog.model.Hashtag;
import com.main.blog.model.Image;
import com.main.blog.model.Post;
import com.main.blog.repository.ICategoryRepository;
import com.main.blog.repository.IImageRepository;
import com.main.blog.repository.IPostRepository;
import com.main.blog.repository.IHashtagRepository;
import com.main.blog.service.interfaces.IPostService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostService implements IPostService {

    @Autowired
    private IPostRepository iPostRepository;

    @Autowired
    private IHashtagRepository iHashtagRepository;

    @Autowired
    private IImageRepository iImageRepository;
    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Autowired
    private Mapper mapper;

    @Override
    public ResponseEntity<?> getPostById(Long id) {
        Optional<Post> post = iPostRepository.findById(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(post, RequestPostDto.class));
    }

    @Override
    public ResponseEntity<?> createPost(RequestPostDto requestPost) {
        List<HashtagDto> hashtagDto = requestPost.getHashtag();
        Post post = new Post();
        post.setText(requestPost.getText());
        if (!hashtagDto.isEmpty() || hashtagDto != null) {
            List<Hashtag> hashtags = hashtagDto.stream().map(hashtag -> (mapper.getMapper().map(hashtag, Hashtag.class))).collect(Collectors.toList());
            List<Hashtag> newHashtagList = checkHashtag(hashtags);
            post.setHashtag(newHashtagList);
        }
        List<ImageDto> imagesDto = requestPost.getImages();
        List<Image> images = null;
        if (!imagesDto.isEmpty() || imagesDto != null) {
            images = imagesDto.stream().map(image -> (mapper.getMapper().map(image, Image.class))).collect(Collectors.toList());
            post.setImages(images);
        }
        Category newCategory = null;
        if (requestPost.getCategory() != null) {
            newCategory = mapper.getMapper().map(requestPost.getCategory(), Category.class);
            Category check = iCategoryRepository.findByName(requestPost.getCategory().getName());
            post.setCategory(check);
        }
        post.setDate(new Date());
        Post savedPost = iPostRepository.save(post);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(savedPost);
    }

    @Override
    public ResponseEntity<?> getAllPosts() {
        List<Post> posts = iPostRepository.findAll();
        List<RequestPostDto> postsDto = posts.stream().map(post -> (mapper.getMapper().map(post, RequestPostDto.class))).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(postsDto);
    }
    @Override
    public ResponseEntity<?> deletePost(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<?> updatePost(Long id, RequestPostDto requestPostDto) {
        return null;
    }

    @Override
    public ResponseEntity<?> getPostByCategory(Long categoryId) {
        return null;
    }

    @Override
    public ResponseEntity<?> likePost(Long id, UserIdDto userIdDto) {
        return null;
    }

    @Override
    public ResponseEntity<?> unlikePost(Long id, UserIdDto userIdDto) {
        return null;
    }

    public List<Hashtag> checkHashtag(List<Hashtag> hashtag) {
        List<Hashtag> dbHashtags = iHashtagRepository.findAll();
        if (dbHashtags.isEmpty() || dbHashtags == null) {
            return iHashtagRepository.saveAll(hashtag);
        }
        List<Hashtag> repeatedHashtags = new ArrayList<>();
        List<Hashtag> hashtagToSave = new ArrayList<>();

        for (int i = 0; i < hashtag.size(); i++) {
            boolean flag = true;
            int index = 0;
            for (int j = 0; j < dbHashtags.size(); j++) {
                if (hashtag.get(i).getName().equalsIgnoreCase(dbHashtags.get(j).getName())) {
                    flag = false;
                    index = j;
                }
            }
            if (flag) {
                hashtagToSave.add(hashtag.get(i));
            } else {
                repeatedHashtags.add(dbHashtags.get(index));
            }
        }
        List<Hashtag> newHashtags = iHashtagRepository.saveAll(hashtagToSave);

        for (Hashtag actual : newHashtags) {
            repeatedHashtags.add(actual);
        }

        return repeatedHashtags;
    }



}
