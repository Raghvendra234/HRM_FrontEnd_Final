import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateLeaveComponent } from './update-leave.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateLeaveRouting } from './update-leave.routing';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UpdateLeaveComponent],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UpdateLeaveRouting,
    HttpClientModule
  ]
})
export class UpdateleaveModule { }
