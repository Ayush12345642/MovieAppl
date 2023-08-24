package com.example.FavouriteMovieService.rabbitMQ.Domain;

import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FavouriteDTO {
    private String movieId;
    private String movieName;
    private String email;
}
