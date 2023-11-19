import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NgToastComponent, NgToastService } from 'ng-angular-popup'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{

  loginUsername: any;
  loginPassword: any;

  constructor(private loginService:LoginService,private _router:Router,
              private toast: NgToastService
             ){}

    credentials=
    {
        username:'',
        password:'',
    };


  ngOnInit(){ }
    
  formSubmit()
  {
    console.log("Login button submitt....!");
    console.log(this.credentials.username);
    
    this.loginUsername=this.credentials.username;
    this.loginPassword=this.credentials.password;
   this.loginData();

    
    if((this.credentials.username.trim() != '' && this.credentials.username!=null) 
    && (this.credentials.password.trim() != '' && this.credentials.password != null)){
 
  
      this.loginService.generateToken(this.credentials).subscribe((data:any)=>{
        console.log(data.token);
        localStorage.setItem('login',JSON.stringify(data))

     
        console.log("Check the token, Role and employee ========");
        console.log(data.employeeId);
        
        console.log(data.token);
        this.loginService.setEmployeeId(data.employeeId);
        localStorage.setItem('login',JSON.stringify(data))

        console.log("token.................",data.token);
  
        

      
        //Get to from getToken() Method
        console.log( this.loginService.getToken());
        let token=this.loginService.getToken();
        console.log(token);
        



      this.toast.success({detail: "Login", summary:"Login successfully !!!", duration: 1000})
        this._router.navigate(['/admin/dashboard'])
      },(error)=>
      {
   
        this.toast.error({detail: "Login", summary:"login failed, Try again later !!!", duration: 5000})
         //   this._router.navigate(['/login'])
        console.log(error);
       
      });
     }


     
 
  }





  loginData()
  {
    console.log("Printing login Data ...............");
    console.log(this.loginUsername);
    console.log(this.loginPassword);
    localStorage.setItem("loginName",this.loginUsername);
    localStorage.setItem("loginPass",this.loginPassword);
    
  }
}




function redirect() {
  throw new Error('Function not implemented.');
}
// function redirect() 
// {
//   throw new Error('Function not implemented.');
// }


//}


