import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { MonthlyWiseSalaryComponent } from "./monthly-wise-salary.component";


const routs:Routes = [
    {
        path:'',
        component: MonthlyWiseSalaryComponent,

             
    }
]
@NgModule({

    imports:[RouterModule.forChild(routs)],
    exports: [RouterModule]


})
export class MonthlyWiseSalaryRoutingModule{

}