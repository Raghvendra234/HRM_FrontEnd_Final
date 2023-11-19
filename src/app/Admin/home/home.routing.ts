import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "src/app/services/auth.guard";

const routs:Routes = [
    {
        path:'',
        component:HomeComponent,
     //   canActivate:[AuthGuard]
        
    }
]
@NgModule({
    declarations:[],
    imports:[RouterModule]

})
export class HomeRouting{

}