import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsListService } from 'src/app/services/projects-list.service';
import { ProjectsItems } from 'src/app/models/projects-items';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  ngOnInit(): void {
    this.projetList = this.projetListService.projetList
    
  }

  constructor(public _router: Router, private projetListService: ProjectsListService) {}

  projetList: ProjectsItems[] = [];

  

  toProject(id: string){
    this._router.navigate(['/project', id]);
  }

}
