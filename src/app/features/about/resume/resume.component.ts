import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/switch-mode/theme.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  isSwitchMode: boolean = false;

  ngOnInit(): void {
    const themeSubscription = this.themeService.getIsSwitchMode().subscribe((isSwitchMode: boolean) => {
      this.isSwitchMode = isSwitchMode;
    });
    window.addEventListener('beforeunload', () => {
      themeSubscription.unsubscribe();
    })
  }

  ngAfterViewInit() {
    const itemsResume = document.querySelectorAll(".resume__item");
    const divisionBar = document.querySelectorAll('.resume__bar')
    const resumeTitle = document.querySelector('#resumeTitle');



    if (itemsResume && divisionBar && resumeTitle) {
      const observerOpacity = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, 200);
          } else {
            setTimeout(() => {
              entry.target.classList.remove('is-visible');
            }, 200);
          }
        });
      });
      const observerWidth = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-expanded');
            }, 200);
          } else {
            setTimeout(() => {
              entry.target.classList.remove('is-expanded');
            }, 200);
          }
        })
      })

      observerOpacity.observe(resumeTitle);

      itemsResume.forEach(item => {
        observerOpacity.observe(item);
      });
      divisionBar.forEach(item => {
        observerWidth.observe(item);
      });
    }
  }

  

}
