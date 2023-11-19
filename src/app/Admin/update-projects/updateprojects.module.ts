import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { RouterModule } from '@angular/router';
import { UpdateProjectsRouting } from './update-projects.routing';
import { UpdateProjectsComponent } from './update-projects.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [UpdateProjectsComponent],
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UpdateProjectsRouting,
    HttpClientModule,

    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
 
    ]
})
export class UpdateprojectsModule { }
