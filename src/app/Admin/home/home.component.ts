import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService:LoginService){}
  
  public loggedIn=false;

  ngOnInit(){
    console.log("inside admin");
    
    this.loggedIn=this.loginService.isLoggedIn();

  }

  logOutUser(){
    this.loginService.logOut();
    location.reload
  }

  // getSubmit(){
  //   console.log(this.registrationReq);
    
  // }

}
