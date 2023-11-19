import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { UpdateProjectsComponent } from "./update-projects.component";

const routs:Routes = [
    {
        path:'',
        component:UpdateProjectsComponent,
        // canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class UpdateProjectsRouting{

}