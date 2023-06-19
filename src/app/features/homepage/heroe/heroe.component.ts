import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/switch-mode/theme.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  isSwitchMode: boolean = true;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    const themeSubscription = this.themeService.getIsSwitchMode().subscribe((isSwitchMode: boolean) => {
      this.isSwitchMode = isSwitchMode;
    });
    
    window.addEventListener('beforeunload', () => {
      themeSubscription.unsubscribe();
    })
  }



}
