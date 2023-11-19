import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { UpdateSalaryComponent } from "./update-salary.component";

const routs:Routes = [
    {
        path:'',
        component:UpdateSalaryComponent,
           
    }]


@NgModule({
 
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class UpdateSalaryRouting{

}