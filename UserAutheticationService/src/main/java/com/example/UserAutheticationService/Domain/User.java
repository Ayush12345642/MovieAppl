package com.example.UserAutheticationService.Domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class User {
    @Id
    private String email;
    private String password;
    private String gender;
}
