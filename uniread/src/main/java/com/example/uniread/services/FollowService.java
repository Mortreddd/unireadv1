package com.example.uniread.services;

import com.example.uniread.entities.Follow;
import com.example.uniread.entities.User;
import com.example.uniread.repositories.FollowRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FollowService {

    private final FollowRepository followRepository;

    public List<Follow> getFollowerByUser(User user){
        return followRepository.findByFollower(user);
    }

    public List<Follow> getFollowingByUser(User user){
        return followRepository.findByFollowing(user);
    }

}
