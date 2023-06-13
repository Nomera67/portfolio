import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/switch-mode/theme-service.service';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.scss']
})
export class ToggleModeComponent implements OnInit{

  ngOnInit(): void {}

  isLightMode = false;

  constructor(private themeService: ThemeServiceService) {}

  updateLightMode(): void {
    this.themeService.setLightModeValue(this.isLightMode);
  }

}
