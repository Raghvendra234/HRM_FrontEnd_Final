import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { UpdateLeaveComponent } from "./update-leave.component";

const routs:Routes = [
    {
        path:'',
        component:UpdateLeaveComponent,
        
        
    }
]
@NgModule({

    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]

})
export class UpdateLeaveRouting{

}