import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component(
  {
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
 })

export class AdminComponent 
{

  constructor(private loginService:LoginService, private router:Router){}
  
   loggedIn=false;
   toke: any;
   tokenData: Array<any>[];
   roleType: any;
   
   navigation = ['Home','Employee','Project','Salary','Leave']
   roles = ['HR', 'ADMIN', 'Employee']
   resultNavs : Array<any>=[];
   isNavActive = false;
   permission='yes';

   //Static
   //var roledss: any;
   roleHR:any;
   roleADMIN:any;
   roleEmployee:any;



  ngOnInit()
  {

    this.loggedIn=this.loginService.isLoggedIn();
    this.toke=this.loginService.getToken(); 
    this.roleType=this.toke.role;
    console.log("Printing the role types ");
    console.log(this.roleType);
    console.log(this.toke.employeeId)
    
    
    this.tokenData=this.toke;
    let navs = this.loginService.getToken().navs;
    let role=this.loginService.getToken().role;

    console.log("Getting Role===============");
    console.log(role);
    if(role=="HR")
    {
      this.roleHR=role;
      console.log("Inside if cond  HR......................................");
      console.log(this.roleHR);
    }
    
    else if(role=="ADMIN")
    {
     this.roleADMIN=role;
     console.log("Inside if cond  ADMIN......................................");
     console.log(this.roleADMIN);
    
    }
    else
    {
       this.roleEmployee=role;
      console.log("Inside if cond  ADMIN......................................");
      console.log(this.roleEmployee);
    }

    

    this.getFinalNavs(navs);
  

   }


     getFinalNavs(nav)
     {
      console.log('method');
      
      console.log(nav);
      
      this.resultNavs = [];
      nav.forEach((d:any)=>
      {
        this.navigation.forEach(d1=>
          {
          if((d.models===d1)&&(d.permission=='Yes'))
          {

            // console.log("Printing Permission In ADMIN +++++++++++++++++++");
            // console.log(d.permission);
            // console.log(d.models);
            
            this.permission=d.permission;
            // console.log("Printing isNavActive    ============== ");
            // console.log(this.isNavActive);
            
            
            this.isNavActive = true;
            // console.log(this.isNavActive);
            // console.log('this.isnavactive');
            
          }
        })
      })
      
     }



  
    checkRoleTypes(role:any)
    {
      if(role)
      {

      }else
      {
         
      }

    }
   



  logOutUser()
  {
    this.loginService.logOut();
// <<<<<<< HEAD
//     this.router.navigate[('/')];
//     window.location.reload();
// =======
    this.router.navigate(['/']);
    //window.location.reload();
    console.log("logout---")
// >>>>>>> 92632d641891364d86e1fe96df4d47a9573ea59f
  }

  openDrop(e:any)
  {
    let r = e.target?.parentElement?.parentElement?.parentElement
    r.classList.toggle('showMenu');
  }

}
