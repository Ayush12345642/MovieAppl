import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private httpClient: HttpClient, private router: Router,private snackBar:MatSnackBar) { }
  redirectUrl: string = "";
  isLoggedIn: boolean = false;
  logdata: any;
  customerId: any;
  i: any;
  email: any;

  // register service
  registerUser(RegistrationForm: any) {
    console.log(" services works..");
    console.log(RegistrationForm);
    const registerObservable = this.httpClient.post<any>('http://localhost:8081/api/v2/register', RegistrationForm);
    this.snackBar.open('Form Submitted Successfully','success', {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-warn']   
        })
    
    this.router.navigate(['/auth/login']);
    return registerObservable;
  }

  getUser() {
    return this.httpClient.get<any>("http://localhost:8081/api/v2/registers/" + this.email);
  }

  // login register service ts
  HttpLogin(data: any) {
    return this.httpClient.post("http://localhost:8084/api/v1/login", data);
  }

  
}
