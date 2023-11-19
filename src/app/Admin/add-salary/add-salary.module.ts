import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddSalaryComponent } from './add-salary.component';
import { AddSalaryRoutingModule } from './add-salay.routing';

@NgModule({
  declarations: [AddSalaryComponent],
  
  imports: [
    CommonModule,
    AddSalaryRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class AddSalaryModule { }
