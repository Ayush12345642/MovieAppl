import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent {
  searchItem: any;
  searchedMovies: any=[];
  allSearchedMovies: any=[];
  isReady = false;
  currentPg:number=1;
  constructor( private route: ActivatedRoute,private movieS:MovieServiceService) {
    this.route.params.subscribe(param => {
      if (param['text']) {
        this.searchItem = param['text'];
        this.searchRequiredMovie();
      }
    })
  }

  ngOnInit() {
  }
  searchRequiredMovie() {
    this.movieS.searchMovie(this.searchItem,this.currentPg).subscribe(resp=>{
      this.searchedMovies=resp;
      this.allSearchedMovies=this.searchedMovies.results;
      // this.movser.storeSearchedMovieToJson(this.allSearchedMovies);
      console.log(this.allSearchedMovies);
      this.isReady=true;
    })
    
  }
  decreasePage(){
    this.currentPg--;
    this.searchRequiredMovie();
  }
  increasePage(){
    this.currentPg++;
    this.searchRequiredMovie();
  }
}
