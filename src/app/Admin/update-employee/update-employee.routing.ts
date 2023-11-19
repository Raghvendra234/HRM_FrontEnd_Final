import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { UpdateEmployeeComponent } from "./update-employee.component";

const routs:Routes = [
    {
        path:'',
        component:UpdateEmployeeComponent,
       
    }]
    

@NgModule({
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class UpdateEmployeeRouting{

}