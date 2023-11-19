import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveemployeeListComponent } from './leaveemployee-list.component';


const routes: Routes = [
  {
    path: '',
    component: LeaveemployeeListComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LeaveEmployeeListRouting { }

