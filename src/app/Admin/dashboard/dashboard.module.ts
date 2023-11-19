import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { GoogleChartsModule } from 'angular-google-charts';
//import { GoogleChartModule}  from 'angular-google-charts';


@NgModule({
  declarations: [DashboardComponent],

  
  imports: [
    CommonModule,
    RouterModule,
    DashboardRouting,
    GoogleChartsModule
  ]
})
export class DashboardModule { }
