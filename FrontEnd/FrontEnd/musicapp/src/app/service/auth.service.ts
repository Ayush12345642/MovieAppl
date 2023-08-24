import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string = "";
  constructor(private router: Router, private snackBar:MatSnackBar) { }
  _isLoggedIn: boolean = false;
  login() {
    this._isLoggedIn = true;
    return this._isLoggedIn;
  }
  logout() {
    this._isLoggedIn = false;
    this.snackBar.open('Logged-Out Sucessfully!!','success', {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-warn']   
    })
    this.router.navigate(['/auth/login']);
    return this._isLoggedIn;

  }
 
}
