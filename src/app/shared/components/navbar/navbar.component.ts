import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/switch-mode/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isSwitchMode: boolean = false;

  constructor(private _router: Router, public themeService: ThemeService){}

  ngOnInit(): void {
     const themeSubscription = this.themeService.getIsSwitchMode().subscribe((isSwitchMode: boolean) => {
      this.isSwitchMode = isSwitchMode;
    });
    window.addEventListener('beforeunload', () => {
      themeSubscription.unsubscribe();
    })
  }

  //toggle to on/off navbar
  toggleNav(){
    const primaryNav = document.getElementById("primary-navigation");
    const toggleButton = document.getElementById('toggleButton');
    const logo = document.getElementById('logo');
    if(primaryNav?.getAttribute("data-visible") === "false"){ //if navbar is not visible
      primaryNav.setAttribute("data-visible", "true"); //let it appear with the attribute
      toggleButton?.setAttribute("aria-expanded", "true"); //and tell it to screen readers
      logo?.classList.add('light');
      toggleButton?.classList.add('light');
    } else {
      primaryNav?.setAttribute("data-visible", "false"); //else let it disappear with removing the attribute
      toggleButton?.setAttribute("aria-expanded", "false") //and tell it to screen readers
      logo?.classList.remove('light');
      toggleButton?.classList.remove('light');
    }
  }

  homecoming(){
    this._router.navigate(['/'])
  }

  backgroundMove(){
    const primaryNav = document.getElementById("primary-navigation");
    const items = Array.from(document.querySelectorAll(".nav__item"));
    items.forEach((item, index) => { //For each item of the navbar, use his index
      item.addEventListener("mouseover", () => { //if the mouse is over it
        primaryNav?.setAttribute("data-active-index", index.toString()); //use his index into the data-active-index of the primary navigation bar 
      })
    })
  }
}