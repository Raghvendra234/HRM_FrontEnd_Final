import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth.guard';
import { AuthIntercepter } from './services/auth.intercepter';
import { LoginService } from './services/login.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './Admin/admin.component';
import { UpdateSalaryComponent } from './Admin/update-salary/update-salary.component';
import { EmployeeFilesComponent } from './Admin/employee-files/employee-files.component';
import { Employee } from './services/employee';
import { UpdateProjectsComponent } from './Admin/update-projects/update-projects.component';
import { UpdateLeaveComponent } from './Admin/update-leave/update-leave.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgToastModule } from 'ng-angular-popup';
import { FormComponent } from './form/form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
   
    AppComponent,
    LoginComponent,
    EmployeeFilesComponent,
    ForgotPasswordComponent,
    FormComponent,
   
 
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule,
    NgToastModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot()

  

  ],
 providers: 

   [ { provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true }     ],

     

  bootstrap: [AppComponent],
  schemas: [
   CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
