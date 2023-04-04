package com.main.blog.repository;

import com.main.blog.model.Comment;
import com.main.blog.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICommentRepository extends JpaRepository<Comment, Integer> {
    @Query(
            value = "SELECT * FROM COMMENTS c WHERE c.post_id = :postId",
            nativeQuery = true)
    List<Comment> retrieveAllCommentsOfAPost(Integer publicationId);
}
