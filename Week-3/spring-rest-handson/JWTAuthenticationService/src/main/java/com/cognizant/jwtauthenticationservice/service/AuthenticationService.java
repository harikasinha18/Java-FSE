package com.cognizant.jwtauthenticationservice.service;

import com.cognizant.jwtauthenticationservice.util.JwtUtil;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final JwtUtil jwtUtil = new JwtUtil();

    public String authenticate(String username, String password) {

        // Dummy authentication
        if ("admin".equals(username) && "admin".equals(password)) {
            return jwtUtil.generateToken(username);
        }

        return null;
    }
}