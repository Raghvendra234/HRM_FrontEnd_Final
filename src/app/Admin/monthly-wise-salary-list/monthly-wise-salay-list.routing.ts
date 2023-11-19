import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { MonthlyWiseSalaryListComponent } from "./monthly-wise-salary-list.component";



const routs:Routes = [
    {
         path:'',
         component: MonthlyWiseSalaryListComponent,

             
    }
]
@NgModule({

    imports:[RouterModule.forChild(routs)],
    exports: [RouterModule]


})
export class MonthlyWiseSalaryListRoutingModule{

}