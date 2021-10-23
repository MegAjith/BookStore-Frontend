import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface RegisterModel {
  Email: string
  Password: string
  ConfirmPassword: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(registration: RegisterModel){
    return this.http.post("api/Account/Register",registration).pipe(
      map( v => true),
      catchError(err => of(false)),
    )
  }
}
