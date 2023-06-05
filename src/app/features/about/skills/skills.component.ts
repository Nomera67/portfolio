import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    const itemsSkills = document.querySelectorAll(".skills__item");
    const divisionBar = document.querySelectorAll('.skills__bar')
    const skillsTitle = document.querySelector('#skillsTitle');



    if (itemsSkills && divisionBar && skillsTitle) {
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

      observerOpacity.observe(skillsTitle);

      itemsSkills.forEach(item => {
        observerOpacity.observe(item);
      });
      divisionBar.forEach(item => {
        observerWidth.observe(item);
      });
    }
  }



}
