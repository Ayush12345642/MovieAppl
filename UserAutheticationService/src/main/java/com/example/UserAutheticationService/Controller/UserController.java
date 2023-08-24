package com.example.UserAutheticationService.Controller;

import com.example.UserAutheticationService.Domain.User;
import com.example.UserAutheticationService.Exception.InvalidCredentialException;
import com.example.UserAutheticationService.Exception.UserAlreadyExitsException;
import com.example.UserAutheticationService.Exception.UserNotFoundException;
import com.example.UserAutheticationService.Service.SecurityTokenGenerator;
import com.example.UserAutheticationService.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class UserController {
    private UserServiceImpl userService;
    private SecurityTokenGenerator securityTokenGenerator;
  @Autowired
    public UserController(UserServiceImpl userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user)throws InvalidCredentialException
    {
        User user1=userService.findByEmailAndPassword(user.getEmail(),user.getPassword());
        if(user1==null)
        {
            throw new InvalidCredentialException();
        }
        Map<String,String> map=securityTokenGenerator.generateToken(user);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    @PostMapping("/user")
    public ResponseEntity<?> saveUser(@RequestBody User user)throws UserAlreadyExitsException
    {
        return new ResponseEntity<>(userService.saveUser(user),HttpStatus.CREATED);
    }
    @GetMapping("/getAllUser")
    public ResponseEntity<?> getAllUser()throws UserNotFoundException
    {
        return new ResponseEntity<>(userService.getAllUser(),HttpStatus.OK);
    }
}
