import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
    
  }

  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
}
