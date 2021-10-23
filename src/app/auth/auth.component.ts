import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserCredentials } from '../shared/services/auth.service';
import { RegisterModel, UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true;
  isLogged: boolean = false;
  isRegistered: boolean = false;
  userCred = {
    username: "",
    password: "",
    confirmPassword: "",
  }

  constructor(private auth: AuthService,private users: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.auth.login(
      new UserCredentials(this.userCred.username,this.userCred.password)
      )?.subscribe(
        isLogged=>{
          // add navigation to /admin and /user here
          // handle wrong credentials
          this.isLogged = isLogged;
          if(!isLogged)
            return;
          if(this.auth.isAdmin())
            this.router.navigateByUrl("/admin");
          else
            this.router.navigateByUrl("/user");
        }
        )
  }
  async onRegister(){
    this.isRegistered = await this.users.register({
      Email: this.userCred.username,
      Password: this.userCred.password,
      ConfirmPassword: this.userCred.confirmPassword
    }).toPromise();
    if(this.isRegistered){
      this.onLogin();
    }
      
  }
}
