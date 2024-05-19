package com.example.uniread.repositories;

import com.example.uniread.entities.Follow;
import com.example.uniread.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long>, CrudRepository<Follow, Long> {
    // Get the followers of the user based on the @param user
    List<Follow> findByFollower(User follower);

    // Get the user's following where the specified @param user
    List<Follow> findByFollowing(User following);
}
