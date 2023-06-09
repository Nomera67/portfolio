import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCardRoutingModule } from './project-card-routing.module';
import { ProjectCardComponent } from './project-card.component';


@NgModule({
  declarations: [
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    ProjectCardRoutingModule
  ]
})
export class ProjectCardModule { }
