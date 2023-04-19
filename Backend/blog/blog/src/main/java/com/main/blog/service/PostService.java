package com.main.blog.service;

import com.main.blog.dto.*;
import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.model.*;
import com.main.blog.repository.*;
import com.main.blog.service.interfaces.IPostService;
import com.main.blog.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Predicate;
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
    private IUserRepository iUserRepository;

    @Autowired
    private Mapper mapper;

    @Autowired
    private JwtService jwtService;

    @Override
    public ResponseEntity<?> getPostById(Long id) {
        Optional<Post> post = iPostRepository.findById(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(post, ResponsePostDto.class));
    }

    @Override
    public ResponseEntity<?> getUserPosts(Long userId) {
        List<Post> posts = iPostRepository.findByUserId(userId);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(posts.stream().map(post -> mapper.getMapper().map(post, ResponsePostDto.class)));
    }


    @Override
    public ResponseEntity<?> createPost(RequestPostDto requestPost, String token) {
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        User user = iUserRepository.findByEmail(jwtService.extractUserEmail(token));
        List<HashtagDto> hashtagDto = requestPost.getHashtag();
        Post post = Post.builder().date(new Date()).text(requestPost.getText()).user(user).title(requestPost.getTitle()).build();
        if (!hashtagDto.isEmpty()) {
            List<Hashtag> hashtags = checkHashtag(hashtagDto.stream().map(hashtag -> (mapper.getMapper().map(hashtag, Hashtag.class))).collect(Collectors.toList()));
            post.setHashtag(hashtags);
        }
        List<ImageDto> imagesDto = requestPost.getImages();
        List<Image> images;
        if (!imagesDto.isEmpty()) {
            images = imagesDto.stream().map(image -> (mapper.getMapper().map(image, Image.class))).collect(Collectors.toList());
            post.setImages(images);
        }
        if (requestPost.getCategory() != null) {
            Category check = iCategoryRepository.findByName(requestPost.getCategory().getName());
            post.setCategory(check);
        }
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(iPostRepository.save(post), ResponsePostDto.class));
    }

    @Override
    public ResponseEntity<?> getAllPosts() {
        List<Post> posts = iPostRepository.findAll();
        List<ResponsePostDto> postsDto = posts.stream().map(post -> (mapper.getMapper().map(post, ResponsePostDto.class))).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(postsDto);
    }

    @Override
    public ResponseEntity<?> deletePost(Long id) {
        try {
            Post post = iPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post not found"));
            iPostRepository.delete(post);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Post deleted");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

    }

    @Override
    public ResponseEntity<?> updatePost(Long id, PatchPostDto requestPostDto) {
        try {
            Post post = iPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post not found"));
            post.setText(requestPostDto.getText());
            post.setTitle(requestPostDto.getTitle());
            post.getImages().clear();
            post.getImages().addAll(requestPostDto.getImages().stream().map(imageDto -> mapper.getMapper().map(imageDto, Image.class)).toList());
            List<Hashtag> hashtags = checkHashtag(requestPostDto.getHashtag().stream().map(hashtag -> (mapper.getMapper().map(hashtag, Hashtag.class))).collect(Collectors.toList()));
            post.setHashtag(hashtags);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(mapper.getMapper().map(iPostRepository.save(post), ResponsePostDto.class));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> getPostByCategory(Long categoryId) {
        List<Post> posts = iPostRepository.findByCategoryId(categoryId).stream().toList();
        List<ResponsePostDto> postsDto = posts.stream().map(post -> (mapper.getMapper().map(post, ResponsePostDto.class))).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(postsDto);
    }

    @Override
    public ResponseEntity<?> likePost(Long id, String token) {
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        try {
            Post post = iPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post not found"));
            User user = iUserRepository.findByEmail(jwtService.extractUserEmail(token));
            boolean postLiked = post.getLikes().stream().anyMatch(userLike -> userLike.getId().equals(user.getId()));
            if (postLiked) {
                post.getLikes().remove(user);
            } else {
                post.getLikes().add(user);
            }
            ResponsePostDto responsePostDto = mapper.getMapper().map(iPostRepository.save(post), ResponsePostDto.class);
            responsePostDto.setCountLikes((long) post.getLikes().size());
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(responsePostDto);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @Override
    public ResponseEntity<?> getByTitle(String title, String text) {
        List<Post> posts = iPostRepository.findAllByTitleContainingOrTextContaining(title, text);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(posts.stream().map(post -> mapper.getMapper().map(post, ResponsePostDto.class)));
    }

//    @Override
//    public ResponseEntity<?> getLikes(Long postId) {
//        return ResponseEntity.status(HttpStatus.ACCEPTED).body(iLikeRepository.countByPost_Id(postId));
//    }


    public List<Hashtag> checkHashtag(List<Hashtag> hashtags) {
        List<Hashtag> dbHashtags = new ArrayList<>((hashtags.stream().map(hashtag -> iHashtagRepository.findByName(hashtag.getName())).toList()));
        dbHashtags.removeIf(Objects::isNull);
        if (dbHashtags.isEmpty()) {
            return iHashtagRepository.saveAll(hashtags);
        } else {
            Predicate<Hashtag> nameFilter = hashtag -> dbHashtags.stream()
                    .map(Hashtag::getName)
                    .noneMatch(dbHashtagName -> dbHashtagName.equals(hashtag.getName()));

            List<Hashtag> hashtagsFiltered = hashtags.stream()
                    .filter(nameFilter)
                    .collect(Collectors.toList());
            hashtagsFiltered = hashtagsFiltered.stream().map(hashtag -> iHashtagRepository.save(hashtag)).collect(Collectors.toList());
            hashtagsFiltered.addAll(dbHashtags);
            return hashtagsFiltered;
        }
    }


}
