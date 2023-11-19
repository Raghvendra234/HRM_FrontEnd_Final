
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeListRouting } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';
import { AdminComponent } from '../admin.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [EmployeeListComponent],
  
  imports: [
    CommonModule,
    EmployeeListRouting,
    RouterModule,
    AdminModule
  ]
})
export class EmployeeListModule { }
