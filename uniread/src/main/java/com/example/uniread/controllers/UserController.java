package com.example.uniread.controllers;

import com.example.uniread.auth.AuthRequest;
import com.example.uniread.config.JwtService;
import com.example.uniread.entities.User;
import com.example.uniread.services.UserService;
import com.example.uniread.utils.AuthenticatedUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RequiredArgsConstructor
@RestController
@RequestMapping(path="/api/v1", method = {RequestMethod.POST, RequestMethod.GET})
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final AuthenticatedUser authenticatedUser;
    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody User user, String roleName){
        userService.registerUser(user, roleName);
        return ResponseEntity.ok("Created Successfully");
    }
    @PostMapping("/login")
    public ResponseEntity<String> authenticateAndGenerateToken(
            @RequestBody AuthRequest authRequest
    ){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getEmail(),
                        authRequest.getPassword()
                )
        );

        if(authentication.isAuthenticated()){
            return ResponseEntity.ok(jwtService.generateToken(authRequest.getEmail()));
        }
        else {
            throw new UsernameNotFoundException("Credentials not found");
        }
    }

    @PostMapping("/profile/{userId}")
    public ResponseEntity<User> getUserProfile(@PathVariable Long userId){
        User authUser = authenticatedUser.getAuthenticatedUser();
        if(Objects.equals(authUser.getId(), userId)){
            return ResponseEntity.ok().body(authUser);
        }

        return ResponseEntity.noContent().build();
    }

}
