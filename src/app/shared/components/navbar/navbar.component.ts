import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private _router: Router){}
  
  toggleNav(){
    const primaryNav = document.getElementById("primary-navigation");
    const toggleButton = document.getElementById('toggleButton');
    if(primaryNav?.getAttribute("data-visible") === "false"){
      primaryNav.setAttribute("data-visible", "true");
      toggleButton?.setAttribute("aria-expanded", "true");
    } else {
      primaryNav?.setAttribute("data-visible", "false");
      toggleButton?.setAttribute("aria-expanded", "false")
    }
  }

  homecoming(){
    this._router.navigate(['/'])
  }
}