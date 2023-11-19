import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/auth.guard";
import { UploadfilesComponent } from "./uploadfiles.component";

const routs:Routes = [
    {
        path:'/uploadfiles',
        component:UploadfilesComponent,
        canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class UplloadFilesRouting{

}