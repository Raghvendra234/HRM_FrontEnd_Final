import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
;
import { RouterModule } from '@angular/router';
import { MonthlyWiseSalaryRoutingModule } from './monthly-wise-salay.routing';
import { MonthlyWiseSalaryComponent } from './monthly-wise-salary.component';
import { FormsModule } from '@angular/forms';

// import { AddSalaryComponent } from './add-salary.component';
//import { AddSalaryRoutingModule } from './monthly-wise-salay.routing';

@NgModule({
  declarations: [MonthlyWiseSalaryComponent],
  
  imports: [
    CommonModule,
    MonthlyWiseSalaryRoutingModule,
    HttpClientModule,

    FormsModule,
    RouterModule
  ]
})
export class MonthlyWiseSalaryModule { }
