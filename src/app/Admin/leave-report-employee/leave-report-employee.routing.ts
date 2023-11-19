import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { LeaveReportEmployeeComponent } from "./leave-report-employee.component";

const routs:Routes = [
    {
        path:'',
        component:LeaveReportEmployeeComponent,

        
    }
]
@NgModule({
    declarations: [],
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class LeaveReportRoutingModule{

}