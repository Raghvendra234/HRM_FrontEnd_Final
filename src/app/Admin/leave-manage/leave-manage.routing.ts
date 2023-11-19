import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { LeaveManageComponent } from "./leave-manage.component";

const routs:Routes = [
    {
        path:'/leave',
        component:LeaveManageComponent,
        canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class LeaveManagetRouting{

}