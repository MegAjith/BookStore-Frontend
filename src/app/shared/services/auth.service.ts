import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastService } from './toast.service';

interface User {
  userName?: string
  access_token?: string
  role?: string
}

export class UserCredentials {
  public grant_type: string = "password"
  public username: string = ""
  public password: string = ""
  /**
   *
   */
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  toString() {
    return new HttpParams()
      .set("grant_type", this.grant_type)
      .set("username", this.username)
      .set("password", this.password)
      .toString()
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: User = undefined;
  constructor(private http: HttpClient,private toastService: ToastService) {
    this.loadAuth();
   }

   saveAuth(){
      if(this.user)
        localStorage.setItem("auth",JSON.stringify(this.user));
      else{
        localStorage.removeItem("auth");
      }
        
   }

   loadAuth(){
     this.user = JSON.parse(localStorage.getItem("auth")||"null");
   }

  getAuthorizationToken() {
    if (this.user?.access_token) {
      return this.user.access_token;
    }
    return "";
  }

  isAdmin() {
    return this.user?.role == "Admin"
  }

  login(userCred: UserCredentials) {
    if (!(userCred && userCred.username && userCred.password))
      return;
    return this.http.post<User>(
      "Token",
      userCred.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }).pipe(
        map((authUser) => {
          this.user = authUser;
          this.makeToast();
          this.saveAuth();
          return true
        }),
        catchError((error: HttpErrorResponse) => {
          this.user = undefined;
          this.saveAuth();
          return of(false);
        }),
      )
  }

  makeToast(){
    this.toastService.show({
      header: "Login Successful!",
      body: `Logged in as ${this.user?.role} ${this.user?.userName}`
    });
  }
}
