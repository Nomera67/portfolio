import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCardComponent } from './project-card.component';

const routes: Routes = [{ path: '', component: ProjectCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCardRoutingModule { }
