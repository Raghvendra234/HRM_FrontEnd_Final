import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Employee } from './services/employee';
import { LoginService } from './services/login.service';
//import { AlertService } from './services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  private subscription = new Subscription();
  message: any;


  title = 'anular-frontend';
  registrationReq:Employee = new Employee();

  employeedata:any={};

  getSubmit(){
    console.log(this.registrationReq);
    
  }

  public loggedIn=false;

  constructor(private loginServise:LoginService){}

  ngOnInit(): void 
   {
  //   this.subscription = this.alert.getAlert().subscribe(message => {
  //     switch (message && message.type) {
  //       case 'info':
  //         message.cssClass = 'alert alert-info';
  //         break;
  //       case 'success':
  //         message.cssClass = 'alert alert-success';
  //         break;
  //       case 'error':
  //         message.cssClass = 'alert alert-error';
  //         break;
  //     }

  //     this.message = message;
  //   });
      this.loggedIn=this.loginServise.isLoggedIn();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


