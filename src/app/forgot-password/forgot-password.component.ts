// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.css']
// })
// export class ForgotPasswordComponent {

// }

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit
{

  formModal: any;
  formModal2: any;
  

  //Object
  forgotData ={email:''}
    otpData= {  otp:'' }
  passwordData={ password:''}
             
             


    constructor(private employeeService: EmployeeService, private router: Router)
    { }          
  
  ngOnInit(): void
  {
   this.formModal=new window.bootstrap.Modal(
    document.getElementById("exampleModal")
   );

   this.formModal2=new window.bootstrap.Modal(
     document.getElementById("exampleModal2")
   );
  }


  openModal()
  {
    this.formModal.show();
  }

  doSomething()
  {
    this.formModal.hide();
  }



  openModal2()
  {
   this.formModal2.show();
  }





  formSubmit()
  {
    console.log("Inside formSubmit method ==========");
    console.log(this.forgotData.email);
    
    
     this.employeeService.sendOTP(this.forgotData).subscribe((data)=>
      {
        console.log("Saved Data !!!");
        alert("Something !!!");
     //  this.openModal();
      },(error) =>
      {
      //  alert("Something wrong !!!");
        this.openModal();
        
      })
   }




   formSubmitOTP
   ()
  {
    console.log("Inside formSubmit method ==========");
    console.log(this.otpData.otp);
    
    
     this.employeeService.otpVerify(this.otpData).subscribe((data)=>
      {
        console.log("Saved Data !!!");
        alert("Something !!!");
        this.openModal2();
      },(error) =>
      {
      //  alert("Something wrong !!!");
      //  this.openModal();
      this.openModal2();
        
      })
   }


   formSubmitSetNewPassword()
   {
    console.log("Set New Passsword !!!");
    console.log(this.passwordData.password);
    console.log("Print Object");
    console.log(this.passwordData);
    
    
    
     this.employeeService.updatePassword(this.passwordData).subscribe((data)=>
     {
      console.log("Password Changed");
      console.log(data)
     }, (error) =>
     {
      console.log("Errro !!!");
      this.router.navigate(['login'])
      
     })
   }

}
