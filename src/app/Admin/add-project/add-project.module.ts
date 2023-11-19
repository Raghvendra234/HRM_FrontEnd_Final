import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddProjectComponent } from './add-project.component';
import { AddProjectsRoutingModule } from './add-project.routing';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [AddProjectComponent],
  
  imports: [
    CommonModule,
    AddProjectsRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
  
})
export class AddProjectsModule { }