import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home-first',
  templateUrl: './home-first.component.html',
  styleUrls: ['./home-first.component.css']
})

export class HomeFirstComponent 
{
   constructor(private loginService:LoginService,private router:Router){}
  
  public loggedIn=false;

  ngOnInit(){
    console.log("inside admin");
    
    this.loggedIn=this.loginService.isLoggedIn();

  }

  logOutUser(){
    this.loginService.logOut();
    this.router.navigate[('login')];
    window.location.reload();

  }

}
