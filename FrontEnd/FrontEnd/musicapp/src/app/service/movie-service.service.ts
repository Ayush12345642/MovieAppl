import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
    
  //  private urlMovieDB: string = "https://api.themoviedb.org/3";
   
  baseUrl: string;
  apiKey: string;
  constructor(private http: HttpClient,private router:Router) {this.baseUrl = 'https://api.themoviedb.org/3/';
  this.apiKey = '906a6c7099bc82b8424ff2afe6fa712b';}
  movieName:string | undefined;
  movieInfo: any;
  currentPage:number=1;
  recommendedMovieId:any;
  email:any;
  favMovieObj:any={};
  
  // x="550";
  // y:number=+this.x;

  // for particular movie
  selectedMovie(data: any) {
    this.movieInfo = data;
    this.router.navigate(['/dashboard/movie-info']);
  }
  //to get all the favourite movies from the Api by Movie Id.
  getAllFavouriteMoviesFromApi(movieId:number){
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&append_to_response=credits`;
    return this.http.get<any>(url);
  }
  // To display all Movies
  getAllMovies(currentPage:number) {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&page=${currentPage}`;
    return this.http.get<any>(url);
  }

  // get one movie details
  getParticularMovieDetails(movieId:number)
  {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  // Search movies
  searchMovie(searchItem:any,currentPage:number){
    console.log("i am inside the movie service");
    console.log(searchItem);
    let searchUrl=`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=es&query=${searchItem}&page=${currentPage}`
    console.log(searchUrl);
    // console.log(this.y);
    return this.http.get(searchUrl);
    // return this.http.getRequest("searchUrl");
  }
  //to get all the recommended movies
  getAllRecommendedMovies(recMovieId:number)
  {
    let recommendedUrl=`https://api.themoviedb.org/3/movie/${recMovieId}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.http.get(recommendedUrl);
  }
  addMovieToFavourites(movieId:number,movieName:any){    
    this.favMovieObj.movieId=movieId;
    this.favMovieObj.movieName=movieName;
    this.favMovieObj.email=localStorage.getItem('email');
    console.log(this.favMovieObj);
    return this.http.post("http://localhost:8081/api/v3/register",this.favMovieObj);
  }
  getFavouriteMoviesByEmail()
  {
    return this.http.get("http://localhost:8086/api/v4/favourite/"+this.email)
  }
  deleteFavouriteMovie(delMovieId:String){
    return this.http.delete("http://localhost:8086/api/v4/deleteFavourite/"+delMovieId+"/"+this.email);
  }
  deleteFavouriteFromMovieService(delMovieId:String){
    return this.http.delete("http://localhost:8081/api/v3/deleteFavourite/"+delMovieId+"/"+this.email);
  }
  getRecomendMovies(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}`);
  }
  getMovieVideo(data:any):Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`);
  }
}

