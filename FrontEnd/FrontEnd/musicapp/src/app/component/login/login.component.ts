import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import {MovieServiceService} from 'src/app/service/movie-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  authenticationToken: any = "";
  signin: any;
  LoginForm=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  get getEmail() {
    return this.LoginForm.controls['email']
  }
  get getPassword() {
    return this.LoginForm.controls['password']
  }
  // get authService(): AuthService{
  //   return this.authService;
  // }
openSnackbar(){
    this.snackBar.open('WELCOME TO MUZIX APP !!! LoggedIn Successfully!!!', 'Success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-warn']   
        })
      }
  constructor(private mainService: UserServiceService, public authService: AuthService, public router: Router, private movieService: MovieServiceService  , private snackBar:MatSnackBar) { }


  onSubmit() {
    console.log(this.LoginForm.value);
  }
  

  loggedin(): void {
    this.mainService.email = this.LoginForm.value.email;
    this.movieService.email = this.LoginForm.value.email;
    localStorage.setItem('email',this.movieService.email);
    this.mainService.HttpLogin(this.LoginForm.value).subscribe((a) => {
      console.log(a);
      this.authenticationToken = a;
      this.signin = this.authService.login();
    
      this.router.navigate(["dashboard/home"]);
    },
      err => {
        alert("Invalid username or password");
        this.LoginForm.reset();
      })
    this.LoginForm.reset({});
    console.log("reset");

  }
}
