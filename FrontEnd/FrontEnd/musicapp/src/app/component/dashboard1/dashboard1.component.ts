import { Component,OnInit } from '@angular/core';
import { TmdbService } from 'src/app/service/tmdb.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {
  trendingResult:any = [];
  actionMovieResult:any = [];
  adventureMovieResult:any = [];
  animationMovieResult:any = [];
  comedyMovieResult:any = [];
  documentaryMovieResult:any = [];
  sciencefictionMovieResult:any = [];
  thrillerMovieResult:any = [];
  currentPg:number=1;

  constructor(private tmdbService:TmdbService) { }

  ngOnInit():void {
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  trendingData() {
    this.tmdbService.trendingApiData(this.currentPg).subscribe((result)=>{
      console.log(result, 'trendingresult#');
      this.trendingResult = result.results;
      console.log(this.trendingResult);
    });
  }

  actionMovie() {
    this.tmdbService.fetchActionMovies(this.currentPg).subscribe((result)=>{
      this.actionMovieResult = result.results;
    });
  }

  adventureMovie() {
    this.tmdbService.fetchAdventureMovies(this.currentPg).subscribe((result)=>{
      this.adventureMovieResult = result.results;
    });
  }

  animationMovie() {
    this.tmdbService.fetchAnimationMovies(this.currentPg).subscribe((result)=>{
      this.animationMovieResult = result.results;
    });
  }

  comedyMovie() {
    this.tmdbService.fetchComedyMovies(this.currentPg).subscribe((result)=>{
      this.comedyMovieResult = result.results;
    });
  }

  documentaryMovie() {
    this.tmdbService.fetchDocumentaryMovies(this.currentPg).subscribe((result)=>{
      this.documentaryMovieResult = result.results;
    });
  }

  sciencefictionMovie() {
    this.tmdbService.fetchSciencefictionMovies(this.currentPg).subscribe((result)=>{
      this.sciencefictionMovieResult = result.results;
    });
  }

  thrillerMovie() {
    this.tmdbService.fetchThrillerMovies(this.currentPg).subscribe((result)=>{
      this.thrillerMovieResult = result.results;
    });
  }
  decreasePage(){
    this.currentPg--;
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }
  increasePage(){
    this.currentPg++;
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }


}
