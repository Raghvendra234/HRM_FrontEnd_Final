import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './Admin/projects-list/projects-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
 import { AuthGuard } from './services/auth.guard';
import { FormComponent } from './form/form.component';

const routes: Routes = [
              {path:'', component: LoginComponent},
          

{
    path: 'admin',
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
      // canActivate:[AuthGuard]
  },
  {
    path:'login', component:LoginComponent
  },
   {path:'forgot', component: ForgotPasswordComponent},

   {path: 'form', component: FormComponent},
  

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

