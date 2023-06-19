import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/switch-mode/theme.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  isSwitchMode: boolean = false;

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
