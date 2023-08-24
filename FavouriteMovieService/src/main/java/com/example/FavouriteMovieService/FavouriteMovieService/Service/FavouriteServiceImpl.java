package com.example.FavouriteMovieService.FavouriteMovieService.Service;

import com.example.FavouriteMovieService.FavouriteMovieService.Domain.Favourite;
import com.example.FavouriteMovieService.FavouriteMovieService.Exception.MovieAlreadyExistsException;
import com.example.FavouriteMovieService.FavouriteMovieService.Exception.MovieNotFoundException;
import com.example.FavouriteMovieService.FavouriteMovieService.Repository.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavouriteServiceImpl implements FavouriteService {
    @Autowired
    private FavouriteRepository favouriteRepository;
    private Favourite favourite;

    @Override
    public Favourite saveFavourite(Favourite favourite) throws MovieAlreadyExistsException {
        if(favouriteRepository.findById(favourite.getMovieId()).isPresent())
        {
            favourite=findByMovieId(favourite.getMovieId());
            if(favourite.getEmail().equals(favourite.getEmail()))
            {
                throw new MovieAlreadyExistsException();
            }
            return favouriteRepository.save(favourite);
        }
        return favouriteRepository.save(favourite);
    }

    @Override
    public Favourite findByMovieId(String movieId) {
        Favourite favourite1=favouriteRepository.findByMovieId(movieId);
        return favourite1;
    }

    @Override
    public List<Favourite> findMoviesBYEmail(String email) {

        return favouriteRepository.findAllMoviesByEmail(email);
    }

    @Override
    public boolean deleteMovieFromFavourite(String movieId, String email) throws MovieNotFoundException {
        favouriteRepository.deleteByMovieIdAndEmail(movieId, email);
        return true;
    }
}
