import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { SingleEmployeeDetailspageComponent } from './single-employee-detailspage.component';
import { SingleEmployeeDetailsPageRouting } from './single-employee-detailspage.routing';

@NgModule({
  declarations: [SingleEmployeeDetailspageComponent],
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SingleEmployeeDetailsPageRouting,
    MatExpansionModule,
    
    //BrowserAnimationsModule

  ]
})
export class SingleEmployeeDetailsPageModule { }
