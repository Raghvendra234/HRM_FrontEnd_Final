import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { RegistrationEmployeeComponent } from "./registration-employee.component";

const routs:Routes = [
    {
        path:'',
        component:RegistrationEmployeeComponent,
               
    }
]
@NgModule({
    declarations: [],
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class RegistrationEmployeeRouting{

}