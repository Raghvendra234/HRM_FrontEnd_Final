import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateSalaryComponent } from './update-salary.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateSalaryRouting } from './update-salary.routing';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UpdateSalaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UpdateSalaryRouting,
    HttpClientModule
  ]
})
export class UpdatesalaryModule { }
