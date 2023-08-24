package com.example.FavouriteMovieService.FavouriteMovieService.Controller;

import com.example.FavouriteMovieService.FavouriteMovieService.Domain.Favourite;
import com.example.FavouriteMovieService.FavouriteMovieService.Exception.MovieAlreadyExistsException;
import com.example.FavouriteMovieService.FavouriteMovieService.Exception.MovieNotFoundException;
import com.example.FavouriteMovieService.FavouriteMovieService.Service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
@RequestMapping("/api/v4")
@CrossOrigin
public class FavouriteController {
    @Autowired
    private FavouriteService favouriteService;
    private ResponseEntity<?> responseEntity;
    @PostMapping("/favourite")
    public ResponseEntity<?> saveFavourite(@RequestBody Favourite favourite)throws MovieAlreadyExistsException
    {
        return new ResponseEntity<>(favouriteService.saveFavourite(favourite), HttpStatus.CREATED);
    }
    @GetMapping("favourite/{email}")
    public ResponseEntity<?> getFavouriteMoviesByEmail(@PathVariable String movieId,@PathVariable String email)throws MovieNotFoundException
    {
       return new ResponseEntity<>(favouriteService.findMoviesBYEmail(email),HttpStatus.OK);
    }
    @DeleteMapping("/deleteFavourite/{movieId}/{email}")
    public ResponseEntity<?> deleteMovieFRomFavourite(@PathVariable String movieId,@PathVariable String email)throws MovieNotFoundException
    {
        try{
            responseEntity=new ResponseEntity<>(favouriteService.deleteMovieFromFavourite(movieId, email),HttpStatus.OK);
        }catch(MovieNotFoundException e)
        {
            throw new MovieNotFoundException();
        }
        return responseEntity;
    }
}
