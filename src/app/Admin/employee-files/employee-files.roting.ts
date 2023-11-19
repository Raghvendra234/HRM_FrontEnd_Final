import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { EmployeeFilesComponent } from "./employee-files.component";

const routs:Routes = [
    {
        path:'/employeefile',
        component:EmployeeFilesComponent,
        canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class AddFilestRouting{

}