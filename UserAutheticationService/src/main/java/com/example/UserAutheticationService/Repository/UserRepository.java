package com.example.UserAutheticationService.Repository;

import com.example.UserAutheticationService.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
    public User findByEmailAndPassword(String email,String password);


}
