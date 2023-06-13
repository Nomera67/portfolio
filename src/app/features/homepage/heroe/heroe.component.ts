import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/switch-mode/theme-service.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  isLightMode?: boolean;

  constructor(public themeService: ThemeServiceService) {}

  ngOnInit(): void {
    this.themeService.getIsLightMode().subscribe((isLightMode: boolean) => {
      this.isLightMode = isLightMode;
    });
  }



}
