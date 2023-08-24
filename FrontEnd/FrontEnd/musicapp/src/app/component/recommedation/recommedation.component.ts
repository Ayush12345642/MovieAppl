import { Component,OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';
import { TmdbService } from 'src/app/service/tmdb.service';

@Component({
  selector: 'app-recommedation',
  templateUrl: './recommedation.component.html',
  styleUrls: ['./recommedation.component.css']
})
export class RecommedationComponent implements OnInit{
  titleMovie: string | undefined;
  trendingResult:any = [];
  currentPg:number=1;
  // recommendedMovies: any;
  allRecommendedMovies: any;
  constructor(private service: TmdbService ) {
    this.titleMovie = this.service.movieName;
  }
  ngOnInit(): void {
    this.trendingData();
    // let getParamId = this.router.snapshot.paramMap.get('id');
    // this.service.getRecommendations(this.service.recommendedMovieId).subscribe(res => {
      // this.recommendedMovies = res;
    //   this.allRecommendedMovies = res.results;
    //   console.log("this is the recommended movies");
    //   console.log(this.allRecommendedMovies);
    // });
  }
  trendingData() {
    this.service.trendingApiData(this.currentPg).subscribe((result)=>{
      console.log(result, 'trendingresult#');
      this.trendingResult = result.results;
      console.log(this.trendingResult);
    });
  }
  // movieDetails(data: any) {
  //   this.service.(data);
  // }

}
