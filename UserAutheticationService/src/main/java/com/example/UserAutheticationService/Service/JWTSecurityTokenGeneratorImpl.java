package com.example.UserAutheticationService.Service;

import com.example.UserAutheticationService.Domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JWTSecurityTokenGeneratorImpl implements SecurityTokenGenerator{

    @Override
    public Map<String, String> generateToken(User user) {
        String jwttoken= Jwts.builder().setIssuer("ayush")
                .setSubject(user.getEmail())
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256,"mykey")
                .compact();
        Map<String,String> map=new HashMap<>();
        map.put("token",jwttoken);
        map.put("message","User logged in succesfully");
        return map;
    }
}
