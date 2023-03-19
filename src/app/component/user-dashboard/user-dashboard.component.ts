import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
    
  }

  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
}
