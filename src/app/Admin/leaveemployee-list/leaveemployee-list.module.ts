import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveemployeeListComponent } from './leaveemployee-list.component';

import { RouterModule } from '@angular/router';
import { AdminModule } from '../admin.module';
import { LeaveEmployeeListRouting } from './leaveemployee-list.routing';



@NgModule({
  declarations: [LeaveemployeeListComponent],

  imports: [
    CommonModule,
    LeaveEmployeeListRouting,
    RouterModule,
    AdminModule
  ]
})
export class LeaveemployeeListModule { }
