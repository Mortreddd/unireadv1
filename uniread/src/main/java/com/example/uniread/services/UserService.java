package com.example.uniread.services;

import com.example.uniread.entities.Role;
import com.example.uniread.entities.User;
import com.example.uniread.repositories.RoleRepository;
import com.example.uniread.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class UserService {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void registerUser(User user, String roleName){
        Role role = roleRepository.findByName(roleName).orElseThrow(() -> new RuntimeException("Role not found"));
        user.getRoles().add(role);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public User getUserByEmail(String email){
        return userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found")
                );
    }
    public Optional<User> deleteUserById(Long userId){
        return userRepository.findById(userId);
    }

    public Optional<User> getUserById(Long id){
        return userRepository.findById(id);
    }
}
