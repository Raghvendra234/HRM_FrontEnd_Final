import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { AddProjectComponent } from "../add-project/add-project.component";
import { DetailsPageComponent } from "./details-page.component";

const routs:Routes = [
    
     { path:'', component: DetailsPageComponent,}
   
]
@NgModule({
    
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class DetailsPageRouting{

}