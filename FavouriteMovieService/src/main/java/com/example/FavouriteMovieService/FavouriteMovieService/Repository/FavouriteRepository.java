package com.example.FavouriteMovieService.FavouriteMovieService.Repository;

import com.example.FavouriteMovieService.FavouriteMovieService.Domain.Favourite;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteRepository extends MongoRepository<Favourite,String> {
    public Favourite findByMovieId(String movieId);
    public List<Favourite> findAllMoviesByEmail(String email);
    public boolean deleteByMovieIdAndEmail(String movieId,String email);
}
