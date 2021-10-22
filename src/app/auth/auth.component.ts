import { Component, OnInit } from '@angular/core';
import { AuthService, UserCredentials } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true;
  isLogged: boolean = false;
  userCred = {
    username: "",
    password: "",
    confirmPassword: "",
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.auth.login(
      new UserCredentials(this.userCred.username,this.userCred.password)
      )?.subscribe(
        isLogged=>{
          // add navigation to /admin and /user here
          this.isLogged = isLogged;
        }
        )
  }
}
