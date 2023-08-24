package com.example.UserAutheticationService.Service;

import com.example.UserAutheticationService.Domain.User;
import com.example.UserAutheticationService.Exception.InvalidCredentialException;
import com.example.UserAutheticationService.Exception.UserAlreadyExitsException;
import com.example.UserAutheticationService.Exception.UserNotFoundException;

import java.util.List;

public interface UserService {
    public User saveUser(User user)throws UserAlreadyExitsException;
    public User findByEmailAndPassword(String email,String password)throws InvalidCredentialException;
    public List<User> getAllUser()throws UserNotFoundException;
}
     