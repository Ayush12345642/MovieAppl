package com.example.FavouriteMovieService.FavouriteMovieService.Service;

import com.example.FavouriteMovieService.FavouriteMovieService.Domain.Favourite;
import com.example.FavouriteMovieService.FavouriteMovieService.Exception.MovieAlreadyExistsException;
import com.example.FavouriteMovieService.FavouriteMovieService.Exception.MovieNotFoundException;

import java.util.List;

public interface FavouriteService {
    public Favourite saveFavourite(Favourite favourite)throws MovieAlreadyExistsException;
    public Favourite findByMovieId(String movieId);
    public List<Favourite> findMoviesBYEmail(String email);
    public boolean deleteMovieFromFavourite(String movieId,String email)throws MovieNotFoundException;

}
