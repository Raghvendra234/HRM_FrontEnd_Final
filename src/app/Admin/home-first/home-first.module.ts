import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFirstRoutingModule } from './home-first-routing.module';
import { RouterModule } from '@angular/router';
import { HomeFirstComponent } from './home-first.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [HomeFirstComponent],
  imports: [
    CommonModule,
    HomeFirstRoutingModule,
    RouterModule,
    AdminModule
  ]
})
export class HomeFirstModule { }
