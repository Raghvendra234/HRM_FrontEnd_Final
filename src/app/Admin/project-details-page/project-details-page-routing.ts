import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsPageComponent } from './project-details-page.component';




const routes: Routes = [{path: '', component: ProjectDetailsPageComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectDetailsPageRouting{ }
