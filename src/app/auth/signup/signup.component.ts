import { AuthService } from './../../service/auth.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name : string = '';
  username : string = '';
  password : string = '';

  user : User = new User();

  constructor( private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.name = '';
  }

  signup() {
    this.user.Username = this.username;
    this.user.password = this.username;
    this.user.name = this.name;
    this.user.role = 'user';

    this.authService.signUp(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed.");
        this.ngOnInit();
      }else {
        console.log("Registration successful")
        this.route.navigate(['/']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })
  }
}