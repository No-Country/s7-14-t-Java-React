package com.main.blog.service;


import com.main.blog.config.CustomUserDetails;
import com.main.blog.exception.ResourceNotFoundException;
import com.main.blog.model.User;
import com.main.blog.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


@Service
@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public CustomUserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findOptionalByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return new CustomUserDetails(user);

    }
}
