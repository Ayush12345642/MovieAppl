import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  selectedMovieData: any;
  // selectedMovieGenres:any;
  movies: any = [];
  favouriteMovieId: number = 0;
  favouriteMovieName: any;
  getMovieVideoResult: any;
  getMovieDetailResult: any;
  particularMovieGenre: any;
  alert: boolean = false;
  warningAlert: boolean = false;
  constructor(private mviS: MovieServiceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log("-------------------");
    // this.selectedMovieData = this.mviS.movieInfo;
    console.log(this.selectedMovieData);
    this.getMovieData(getParamId);
    this.getVideo(getParamId);
  }
  getMovieData(id:any) {
   
     
      this.mviS.getParticularMovieDetails(id).subscribe((result)=>{
        console.log(result, 'getmoviedetails#');
        this.getMovieDetailResult = result;
        console.log(this.getMovieDetailResult);
      });
  
  }
  addToFavourite(selectedMovieData: any) {
    this.favouriteMovieId = selectedMovieData.id;
    this.favouriteMovieName = selectedMovieData.original_title;
    this.mviS.addMovieToFavourites(this.favouriteMovieId, this.favouriteMovieName).subscribe((res) => {
      console.log(res);
      this.alert = true;
    },
      err => {
        // alert("this movie already added to your favourite list");
        this.warningAlert = true;
      });

  }
  passRecommended(movieTitle: string) {
    this.mviS.movieName = movieTitle;
  }
  closeAlert() {
    this.alert = false;
    this.warningAlert = false;
  }
  getVideo(id:any) {
    this.mviS.getMovieVideo(id).subscribe((result)=>{
      console.log(result, 'getMovieVideo#');
      result.results.forEach((element:any)=>{
        if(element.type == "Trailer") {
          this.getMovieVideoResult = element.key;
        }
      })
    })
  }
}
