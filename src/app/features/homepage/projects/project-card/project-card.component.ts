import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsListService } from 'src/app/services/projects-list.service';
import { ProjectsItems } from 'src/app/models/projects-items';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  projet: ProjectsItems = {
    id: 0,
    name: '',
    description: '',
    picture: '',
    technologies: '',
    github: '',
    directory: '',
  };

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.projet = this.projectsList.projetList.find(project => project.id === id) || new ProjectsItems();
  }

  constructor(private projectsList: ProjectsListService, private route: ActivatedRoute) {}


}
