import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AdminModule } from '../admin.module';
import { ProjectDetailsPageComponent } from './project-details-page.component';
import { ProjectDetailsPageRouting } from './project-details-page-routing';

import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectDetailsPageComponent],

  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProjectDetailsPageRouting,
    
    MatExpansionModule,
   // BrowserAnimationsModule
  ]
})
export class ProjectDetailsPageModule { }
