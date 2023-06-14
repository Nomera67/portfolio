import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/switch-mode/theme.service';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.scss']
})
export class ToggleModeComponent implements OnInit{

  ngOnInit(): void {
    
  }

  isSwitchMode = true;

  constructor(private themeService: ThemeService) {}

  updateSwitchMode(): void {
    this.themeService.setSwitchModeValue(this.isSwitchMode);
  }

}
