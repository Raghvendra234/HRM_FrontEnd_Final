import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { DetailsPageComponent } from './details-page.component';
import { DetailsPageRouting } from './details-page.routing';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DetailsPageComponent],
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DetailsPageRouting,
    MatExpansionModule,
    
    //BrowserAnimationsModule

  ]
})
export class DetailsPageModule { }
