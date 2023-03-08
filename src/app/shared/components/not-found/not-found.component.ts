import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(private _router: Router){}

  returnHome(){
    this._router.navigate(['/'])
  }

  goAbout(){
    this._router.navigate(['/about'])
  }

  goContact(){
    this._router.navigate(['/contact'])
  }

}
