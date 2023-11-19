import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { UpdateMonthlysalaryComponent } from "./update-monthlysalary.component";

const routs:Routes = [
    {
        path:'',
        component:UpdateMonthlysalaryComponent,
         
    }]

    
@NgModule({
 
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class UpdateMonthlysalaryRouting{

}