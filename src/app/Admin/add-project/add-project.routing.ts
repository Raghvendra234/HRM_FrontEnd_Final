import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { AddProjectComponent } from "./add-project.component";

const routs:Routes = [
    {
        path:'',
        component:AddProjectComponent,
        // canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class AddProjectsRoutingModule{

}