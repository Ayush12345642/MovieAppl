package com.example.FavouriteMovieService.FavouriteMovieService.Config;

import com.example.FavouriteMovieService.FavouriteMovieService.Domain.Favourite;
import com.example.FavouriteMovieService.FavouriteMovieService.Exception.MovieAlreadyExistsException;
import com.example.FavouriteMovieService.FavouriteMovieService.Service.FavouriteServiceImpl;
import com.example.FavouriteMovieService.rabbitMQ.Domain.FavouriteDTO;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private FavouriteServiceImpl favouriteService;
    @RabbitListener(queues = "favourite_movie_queue")
    public void getFavouriteDtoFRomRabbitMq(FavouriteDTO favouriteDTO)throws MovieAlreadyExistsException
    {
        Favourite favourite=new Favourite();
        favourite.setMovieId(favouriteDTO.getMovieId());
        favourite.setMovieName(favouriteDTO.getMovieName());
        favourite.setEmail(favouriteDTO.getEmail());
        favouriteService.saveFavourite(favourite);
    }
}
