import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-favouritecomponent',
  templateUrl: './favouritecomponent.component.html',
  styleUrls: ['./favouritecomponent.component.css']
})
export class FavouritecomponentComponent implements OnInit{
  allFavouriteMovies: any = [];
  favourites: any = [];
 
  constructor(private movieService: MovieServiceService,private router:Router, private snackBar:MatSnackBar) {  }

  ngOnInit(): void {
    this.getFavouriteMovies();
    console.log(this.favourites);

  }
  getFavouriteMovies() {
    this.movieService.getFavouriteMoviesByEmail().subscribe(res => {
      this.allFavouriteMovies = res;
      this.allFavouriteMovies.forEach((s: any) => {
        this.movieService.getAllFavouriteMoviesFromApi(+s.movieId).subscribe((response) => {
          // console.log("hi");
          // console.log(response);
          this.favourites.push(response);
        });
      })
    });
  }
  movieDetails(data: any) {
    this.movieService.selectedMovie(data);
  }
  deleteMovie(data:any) {
    // console.log(data.id);
    this.movieService.deleteFavouriteMovie(data.id).subscribe(res=>{
      console.log("deleting in favourite service ");
      console.log(res); 
    },err=>{
      this.snackBar.open('Movie Deleted from FavList sucessfully!!!', 'Success', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-warn']   
          })
      
    })
    this.movieService.deleteFavouriteFromMovieService(data.id).subscribe(res=>{
      console.log("deleting in movie service ");
      
      console.log(res);
    })
    this.router.navigate(["dashboard/home"]);
    
  }
}
