import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/service/movie-service.service';
import { TmdbService } from 'src/app/service/tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  getRecommendationResult:any;
  selectedMovieData: any;
  movies: any = [];
  favouriteMovieId: number = 0;
  favouriteMovieName: any;
  particularMovieGenre: any;
  alert: boolean = false;
  warningAlert: boolean = false;

  constructor(private tmdbService:TmdbService, private router:ActivatedRoute,private mviS: MovieServiceService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
    // this.getRecommendation(getParamId);
   
  }

  getMovie(id:any) {
    this.tmdbService.getMovieDetails(id).subscribe((result)=>{
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = result;
      console.log(this.getMovieDetailResult);
    });
  }

  getVideo(id:any) {
    this.tmdbService.getMovieVideo(id).subscribe((result)=>{
      console.log(result, 'getMovieVideo#');
      result.results.forEach((element:any)=>{
        if(element.type == "Trailer") {
          this.getMovieVideoResult = element.key;
          console.log(element.key);
        }
      })
    })
  }

  getMovieCast(id:any) {
    this.tmdbService.getMovieCast(id).subscribe((result)=>{
      console.log(result, 'movieCast#');
      this.getMovieCastResult = result.cast;
    })
  }

  // getRecommendation(id:any) {
  //   this.tmdbService.getRecommendations(id).subscribe((result)=>{
  //     console.log(result, 'recommendation#');
  //     this.getRecommendationResult = result.results;
  //   })
  // }

  updateList(id:any) {
    this.getMovie(id);
    this.getMovieCast(id);
    // this.getRecommendation(id);
    this.getVideo(id);
  }
  addToFavourite(selectedMovieData: any) {
    this.favouriteMovieId = selectedMovieData.id;
    this.favouriteMovieName = selectedMovieData.original_title;
    this.tmdbService.addMovieToFavourites(this.favouriteMovieId, this.favouriteMovieName).subscribe((res) => {
      console.log(res);
      
      // this.alert = true;
      this.snackBar.open('Movie Added to FavList Successfully!!!', 'Success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-warn']   
        })
    },
      err => this.snackBar.open('Movie Already Exists!! Select Another!!', 'Success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-warn']   
        }));

  }
  passRecommended(movieTitle: string) {
    this.mviS.movieName = movieTitle;
  }
}
