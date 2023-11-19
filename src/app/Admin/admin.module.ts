import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeFirstComponent } from './home-first/home-first.component';
import { AdminComponent } from './admin.component';
//import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MonthlyWiseSalaryComponent } from './monthly-wise-salary/monthly-wise-salary.component';
import { FormsModule } from '@angular/forms';
import { MonthlyWiseSalaryListComponent } from './monthly-wise-salary-list/monthly-wise-salary-list.component';
import { ProjectDetailsPageComponent } from './project-details-page/project-details-page.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateMonthlysalaryComponent } from './update-monthlysalary/update-monthlysalary.component';
//import { MonthWiseSalaryComponent } from './monthly-wise-salary/monthly-wise-salary.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SingleEmployeeDetailspageComponent } from './single-employee-detailspage/single-employee-detailspage.component';





@NgModule({
  imports: 
  [
    AdminRoutingModule,
    FormsModule,


    CommonModule,
    MatSnackBarModule

  ],
  declarations: [AdminComponent,  EmployeeDetailsComponent]
})
export class AdminModule { }
