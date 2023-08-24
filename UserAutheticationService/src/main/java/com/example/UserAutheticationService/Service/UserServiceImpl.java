package com.example.UserAutheticationService.Service;

import com.example.UserAutheticationService.Domain.User;
import com.example.UserAutheticationService.Exception.InvalidCredentialException;
import com.example.UserAutheticationService.Exception.UserAlreadyExitsException;
import com.example.UserAutheticationService.Exception.UserNotFoundException;
import com.example.UserAutheticationService.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    private UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExitsException {
        if(userRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExitsException();
        }
        return userRepository.save(user);
    }

    @Override
    public User findByEmailAndPassword(String email, String password) throws InvalidCredentialException {
       User user=userRepository.findByEmailAndPassword(email,password);
       if(user==null)
       {
           throw new InvalidCredentialException();
       }
        return user;
    }

    @Override
    public List<User> getAllUser() throws UserNotFoundException {
      return userRepository.findAll();
    }
}
