import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { AddProjectComponent } from "../add-project/add-project.component";
import { SingleEmployeeDetailspageComponent } from "./single-employee-detailspage.component";


const routs:Routes = [
    
     { path:'', component: SingleEmployeeDetailspageComponent}
   
]
@NgModule({
    
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class SingleEmployeeDetailsPageRouting{

}