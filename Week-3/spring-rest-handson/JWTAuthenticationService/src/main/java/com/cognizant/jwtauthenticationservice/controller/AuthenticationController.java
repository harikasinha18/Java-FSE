package com.cognizant.jwtauthenticationservice.controller;

import com.cognizant.jwtauthenticationservice.model.AuthenticationRequest;
import com.cognizant.jwtauthenticationservice.model.AuthenticationResponse;
import com.cognizant.jwtauthenticationservice.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestBody AuthenticationRequest request) {

        String token = authenticationService.authenticate(
                request.getUsername(),
                request.getPassword());

        return new AuthenticationResponse(token);
    }
}