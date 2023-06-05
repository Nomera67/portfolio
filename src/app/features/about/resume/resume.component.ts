import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

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
