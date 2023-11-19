import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MonthlyWiseSalaryListRoutingModule } from './monthly-wise-salay-list.routing';
import { MonthlyWiseSalaryComponent } from '../monthly-wise-salary/monthly-wise-salary.component';
import { MonthlyWiseSalaryListComponent } from './monthly-wise-salary-list.component';


@NgModule({
  declarations: [MonthlyWiseSalaryListComponent],
  
  imports: [
    CommonModule,
    MonthlyWiseSalaryListRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class MonthlyWiseSalaryModule { }
