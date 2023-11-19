// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ProjectsListComponent } from '../projects-list/projects-list.component';
// import { EmployeeListComponent } from './employee-list.component';
// import { SalaryListComponent } from '../salary-list/salary-list.component';
// import { LeaveManageComponent } from '../leave-manage/leave-manage.component';
// import { LeaveReportEmployeeComponent } from '../leave-report-employee/leave-report-employee.component';




// const routes: Routes = [{path:'', component: EmployeeListComponent}];


//   // {
//   //   path:'login',
//   //   component:LoginComponent
//   // }

// //];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class EmployeeListRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeListRouting { 
  


}

