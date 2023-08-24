import { Component, Input,OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  @Input() movies:any;
  constructor(private movieS: MovieServiceService) { }

  ngOnInit(): void {
  }
  movieDetails(movie:any){
    console.log(movie);
    this.movieS.selectedMovie(movie);
  }
}
