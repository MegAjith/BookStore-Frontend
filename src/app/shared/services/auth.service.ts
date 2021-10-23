import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
  user?: User
  constructor(private http: HttpClient) { }

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
          return true
        }),
        catchError((error: HttpErrorResponse) => {
          this.user = undefined;
          return of(false);
        }),
      )
  }
}
