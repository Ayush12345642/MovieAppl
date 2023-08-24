import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieServiceService } from 'src/app/service/movie-service.service';
import { TmdbService } from 'src/app/service/tmdb.service';

@Component({
  selector: 'app-recommended1',
  templateUrl: './recommended1.component.html',
  styleUrls: ['./recommended1.component.css']
})
export class Recommended1Component implements OnInit{
  trendingResult:any = [];
  public id: number | undefined;
  thrillerMovieResult:any = [];
  recomendMovies: any = [];
  currentPg:number=1;
  constructor(private tmdbService:TmdbService, private router: ActivatedRoute,private movieService:MovieServiceService) { }
//   ngOnInit(): void {
//     this.router.params.subscribe((params: Params) => {
//       this.id = params['id'];
//       this.getRecomendMovie(this.id);
//   });
  
// }
ngOnInit():void {
  this.router.params.subscribe((params: Params) => {
    this.id = params['id'];
  
    this.getRecomendMovie(this.id);
  });
}
trendingData() {
  this.tmdbService.trendingApiData(this.currentPg).subscribe((result)=>{
    console.log(result, 'trendingresult#');
    this.trendingResult = result.results;
    console.log(this.trendingResult);
  });
}
getRecomendMovie(id:any) {
  this.movieService.getRecomendMovies(id).subscribe((res: any) => {
    this.recomendMovies = res.results;
  });
}
}
