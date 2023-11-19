import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { AddSalaryComponent } from "./add-salary.component";

const routs:Routes = [
    {
        path:'',
        component:AddSalaryComponent,

             
    }
]
@NgModule({

    imports:[RouterModule.forChild(routs)],
    exports: [RouterModule]


})
export class AddSalaryRoutingModule{

}