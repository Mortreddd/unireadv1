package com.example.uniread.controllers;

import com.example.uniread.entities.Follow;
import com.example.uniread.entities.User;
import com.example.uniread.services.FollowService;
import com.example.uniread.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping(name = "/api/v1/follows")
public class FollowController {

    private final FollowService followService;
    private final UserService userService;
    @GetMapping("/{userId}/followers")
    public ResponseEntity<List<Follow>> getFollowers(@PathVariable Long userId){
        Optional<User> user = userService.getUserById(userId);

        return user.map(_user ->
                ResponseEntity.ok(
                        followService.getFollowerByUser(_user)
                    )
                )
                .orElseGet(() ->
                        ResponseEntity.noContent().build()
                );
    }

    @GetMapping("/{userId}/followings")
    public ResponseEntity<List<Follow>> getFollowings(@PathVariable Long userId){
        Optional<User> user = userService.getUserById(userId);

        return user.map(_user ->
                    ResponseEntity.ok(
                            followService.getFollowerByUser(_user)
                    )
                )
                .orElseGet(() ->
                        ResponseEntity.noContent().build()
                );
    }

}
