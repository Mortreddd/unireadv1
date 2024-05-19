package com.example.uniread.utils;

import com.example.uniread.entities.User;
import com.example.uniread.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthenticatedUser {

    private final UserService userService;

    public User getAuthenticatedUser(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if(principal instanceof UserDetails){
            return userService.getUserByEmail(((UserDetails) principal).getUsername());
        }

        return userService.getUserByEmail(principal.toString());
    }
}
