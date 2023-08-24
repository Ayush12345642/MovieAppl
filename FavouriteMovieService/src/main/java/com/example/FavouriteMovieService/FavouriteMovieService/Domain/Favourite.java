package com.example.FavouriteMovieService.FavouriteMovieService.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Favourite {
    @Id
    private String movieId;
    private String movieName;
    private String email;

}
