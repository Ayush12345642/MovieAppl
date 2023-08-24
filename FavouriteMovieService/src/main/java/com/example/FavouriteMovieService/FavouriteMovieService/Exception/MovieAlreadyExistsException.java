package com.example.FavouriteMovieService.FavouriteMovieService.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.CONFLICT,reason="Movie Already Present")
public class MovieAlreadyExistsException extends Exception{
}
