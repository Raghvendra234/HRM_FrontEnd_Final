import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateMonthlysalaryComponent } from './update-monthlysalary.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UpdateMonthlysalaryRouting } from './update-monthlysalary.routing';



@NgModule({
  declarations: [UpdateMonthlysalaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UpdateMonthlysalaryRouting,
    HttpClientModule
  ]
})
export class UpdateMonthlysalaryModule 
{
  
 }
