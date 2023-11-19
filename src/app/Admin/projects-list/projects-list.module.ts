import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsListRouting } from './projects-list-routing.module';
import { ProjectsListComponent } from './projects-list.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from '../admin.module';
import { FormsModule } from '@angular/forms';



@NgModule(
  {
  declarations: [ProjectsListComponent],

  
  imports: [
    CommonModule,
    ProjectsListRouting,
    RouterModule,

    FormsModule,
    // AdminModule

     AdminModule

  ]
})
export class ProjectsListModule { }
