package com.example.UserAutheticationService.Service;

import com.example.UserAutheticationService.Domain.User;

import java.util.Map;

public interface SecurityTokenGenerator {
    Map<String,String> generateToken(User user);
}
