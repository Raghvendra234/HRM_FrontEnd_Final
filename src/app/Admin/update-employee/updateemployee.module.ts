import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './update-employee.component';
import { UpdateEmployeeRouting } from './update-employee.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [UpdateEmployeeComponent],
  
  imports: [
    CommonModule,
    UpdateEmployeeRouting,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule

  ]
})
export class UpdateemployeeModule { }  