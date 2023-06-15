import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsListService } from 'src/app/services/projects-list.service';
import { ProjectsItems } from 'src/app/models/projects-items';
import { ThemeService } from 'src/app/services/switch-mode/theme.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{


  constructor(public _router: Router, private projetListService: ProjectsListService, public themeService: ThemeService) {}

  projetList: ProjectsItems[] = [];
  isSwitchMode: boolean = false;

  ngOnInit(): void {
    this.projetList = this.projetListService.projetList    

    const themeSubscription = this.themeService.getIsSwitchMode().subscribe((isSwitchMode: boolean) => {
      this.isSwitchMode = isSwitchMode;
    });
    window.addEventListener('beforeunload', () => {
      themeSubscription.unsubscribe();
    })
  }

  ngAfterViewInit() {
    const projectsItem = document.querySelectorAll(".projects__item");


    if (projectsItem) {
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

      projectsItem.forEach(item => {
        observerOpacity.observe(item);
      });
    }
  }
  

  toProject(id: string){
    this._router.navigate(['/project', id]);
  }

}
