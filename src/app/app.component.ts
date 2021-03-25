import { Component } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router :Router
  ) {}
  isLoggedIn: boolean = false;
  wait: boolean = false;
  hide: boolean = true;

  logIn(){
    this.router.navigate(["/home"]);

    this.isLoggedIn = true;
  }

  logOut(){
    this.router.navigate(["/"]);

    this.isLoggedIn = false;
  }


}
