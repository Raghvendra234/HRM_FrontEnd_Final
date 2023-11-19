

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgToastService } from "ng-angular-popup";
import { EmployeeService } from "src/app/services/employee.service";
import { LeaveEmployee, LeaveManage } from "src/app/services/leave";
import { LeaveService } from "src/app/services/leave.service";
import { LoginService } from "src/app/services/login.service";



@Component({
  selector: 'app-leave-report-employee',
  templateUrl: './leave-report-employee.component.html',
  styleUrls: ['./leave-report-employee.component.css']
})
export class LeaveReportEmployeeComponent implements OnInit
{
 
  employeeData:any;
  token: any;
  empId: any;
 
  selectedFile: any;
  currentFile: any;
 

  //Related To  LeftLeave variable
  leftLeave: any;
  casualLeavevar: any;
  sickLeavevar: any;
  marriageLeavevar: any;
  maternityLeavevar: any;
  paternityLeavevar:any;
  bareavementLeavevar: any;
  earnedLeavevar: any;

  typesOfLeave: any;
  res:any;
  

  leaveEmployee: LeaveEmployee=new LeaveEmployee();

  constructor(private leaveService: LeaveService,
              private employeeService: EmployeeService,
              private router: Router,
              private loginService:LoginService,
             private toast: NgToastService
              ) {}

         

              
  ngOnInit(): void
   {

    this.token=this.loginService.getToken(); 
    this.empId=this.token.employeeId
    console.log("Emp ========= ");
    console.log(this.empId);
    
   if(this.empId>0)
   {
    let res=this.employeeService.getEmployeeById(this.empId);  
    res.subscribe((data)=>
    {
     console.log("Only drop dwon +++++++++++");
     console.log(this.token.employeeId);
     
      console.log(data);
     this.employeeData=data;
     console.log("employeeData +++++++++");
     console.log(this.employeeData);
   })
  }
   }

     
   selectFile(event)
   {
     console.log(event);
     console.log(event.target);
     this.selectedFile=event.target.files[0];
   }



 //Store Image and Data
 formSubmit()
  {
    console.log(this.leaveEmployee);
    this.typesOfLeave=this.leaveEmployee.typesOfLeave;
   
    //Related to Deduct Days
    console.log("Days=======================");
    var startDate=new Date(this.leaveEmployee.fromDate)
    var endDate=new Date(this.leaveEmployee.toDate);

    var days=(endDate.getTime()-startDate.getTime())/(1000*3600*24);
    console.log("days ++++++++++++++++"+days);

     
    
    //Related to Get Left Leave In Database
     this.leaveService.getleftLeaveByEmployeeId(this.leaveEmployee.employeeId).subscribe(data=>
    {
        console.log("Left Leave ++++++++");
        console.log(data);
        this.leftLeave=data;
           
        this.casualLeavevar=this.leftLeave.casualLeave;
        this.sickLeavevar=this.leftLeave.sickLeave;
        this.marriageLeavevar=this.leftLeave.marriageLeave;
        this.maternityLeavevar=this.leftLeave.maternityLeave;
        this.paternityLeavevar=this.leftLeave.paternityLeave;
        this.bareavementLeavevar=this.leftLeave.bareavementLeave;
        this.earnedLeavevar=this.leftLeave.earnedLeave;

        console.log("Types of Leave =========================");
        console.log(this.typesOfLeave);
       // console.log(this.casualLeavevar);
        
        
      if(this.typesOfLeave == "CasualLeave" || this.typesOfLeave== "SickLeave" || this.typesOfLeave =="MarriageLeave" || this.typesOfLeave == "MaternityLeave" || this.typesOfLeave == "PaternityLeave" || this.typesOfLeave == "BareavementLeave" ||  this.typesOfLeave == "EarnedLeave")
      {
    
        if(this.typesOfLeave == "CasualLeave")
          {
                 var savedLeave=this.casualLeavevar-days;
                  console.log("Saved Leave ++++++++++++++");
                  console.log(savedLeave);
          
          
                 if(savedLeave==0 || savedLeave>0)
                   {
                      this.leaveService.updateCasualLeave(savedLeave,this.leaveEmployee.employeeId,this.leaveManage).subscribe(data=>
                               {
                                this.res=data;
                                console.log(data);
                                if(this.res>0)
                                         {
                                                 alert("You have a casual leave");
                                                //this code when we will send data and image parallel
                                                // const formData=new FormData();
                                                // formData.append('leaveEmployee', JSON.stringify(this.leaveEmployee));
                                                // formData.append('file', this.selectedFile);
    
   
                                                this.leaveService.saveLeave(this.leaveEmployee).subscribe((data)=>
                                                  {
                                                      alert("Saved Leave !!!");
                                                      //this.toast.success({detail: "Leave", summary:"Leave saved", duration: 10000})
                                                      this.router.navigate(['admin/leavereport']);
                                                  }, (error)=>
                                                   {
                                                  alert("Failed !!!");
                                                //  this.toast.error({detail: "Leave Page", summary:"Something went wrong, Try again later !!!", duration: 10000})   
                                                })
                                   }else 
                                       {
                                         alert("You have no casual leave 2");
                                    //   this.toast.info({detail: "Leave Details", summary: "You have no casual leave !!", duration:10000})
                                       }
                         
                                  })
                    }else
                             {
                             this.toast.info({detail: "Leave Details", summary: "You have no casual leave !!", duration:10000})
                            // alert("You have no casual leave 3!!")
                             this.router.navigate(['admin/leavereport']);
                             }
           }
        


     else if(this.typesOfLeave == "SickLeave")
        {
             var savedLeave=this.sickLeavevar-days;
           
             console.log("Inside Sick Leave");
             console.log(savedLeave);
              console.log(this.typesOfLeave);
          
            if(savedLeave == 0 || savedLeave>0)
              {
                  this.leaveService.updateSickLeave(savedLeave, this.leaveEmployee.employeeId, this.leaveManage).subscribe(data=>
                    {
                         this.res=data;
                         if(this.res>0)
                           {
                               const formData=new FormData();
                               formData.append('leaveEmployee', JSON.stringify(this.leaveEmployee));
                               formData.append('file', this.selectedFile);
                                 
                               this.leaveService.saveLeave(this.leaveEmployee).subscribe((data)=>
                                                             {
                                                              alert("Saved Leave !!!");
                                                           //   this.toast.success({detail: "Leave", summary:"Leave saved !!!", duration: 10000})
                                                              this.router.navigate(['leavelist']);
                                                             }, (error)=>
                                                             {
                                                              alert("Something went wrong, Try again later !!!");
                                                             // this.toast.error({detail: "Leave Page", summary:"Something went wrong, Try again later !!!", duration: 10000}) 
                                                             })

                               
                            }else{
                                  alert("You have no Sick leave !!!");
                               //  this.toast.info({detail: "Leave Details", summary: "You have no sick leave !!", duration:10000})
                                  }
                        })
                 }else
                 {
                  alert("You have no Sick leave !!!");
                 //this.toast.info({detail: "Leave Details", summary: "You have no sick leave !!", duration:10000})
                  this.router.navigate(['leavelist']);
                 }
            }


        



          
        else if(this.typesOfLeave =="MarriageLeave")
          {
            var savedLeave=this.marriageLeavevar-days;

             if(savedLeave == 0 || savedLeave>0)
              {
                  this.leaveService.updateMarriageLeave(savedLeave, this.leaveEmployee.employeeId, this.leaveManage).subscribe(data=>
                   {
                     this.res=data;
                     if(this.res>0)
                             {
                               const formData=new FormData();
                               formData.append('leaveEmployee', JSON.stringify(this.leaveEmployee));
                               formData.append('file', this.selectedFile);
                                 
                              //  this.leaveService.saveLeaveAndImage(formData).subscribe((data)=>
                              this.leaveService.saveLeave(this.leaveEmployee).subscribe((data)=>                      
                                                             {
                                                                alert("Saved Leave !!!");
                                                             // this.toast.success({detail: "Leave", summary:"Leave saved", duration: 10000})
                                                              this.router.navigate(['leavelist']);
                                                             }, (error)=>
                                                             {
                                                              alert("Failed !!!");
                                                             })

                                 
                              }else{
                                  alert("You have no Marriage leave !!!");
                                 // this.toast.info({detail: "Leave Details", summary: "You have no marriage leave !!", duration:10000})    
                                }
                    })
              }else{
                alert("You have no Marriage leave !!!");
               // this.toast.info({detail: "Leave Details", summary: "You have no marriage leave !!", duration:10000})
                this.router.navigate(['leavelist']);
                 }
          }

   
        
           

        
           else if(this.typesOfLeave =="MaternityLeave")
           {
                var savedLeave=this.maternityLeavevar-days;
   
                if(savedLeave == 0 || savedLeave>0)
                 {
                      this.leaveService.updateMaternityLeave(savedLeave, this.leaveEmployee.employeeId, this.leaveManage).subscribe(data=>
                      {
                        this.res=data;
                        if(this.res>0)
                               {
                                  const formData=new FormData();
                                  formData.append('leaveEmployee', JSON.stringify(this.leaveEmployee));
                                  formData.append('file', this.selectedFile);
                                    
                                  this.leaveService.saveLeave(this.leaveEmployee).subscribe((data)=>
                                                                {
                                                                 // alert("Saved Leave !!!");
                                                                // this.toast.success({detail: "Leave", summary:"Leave saved", duration: 10000})
                                                                 this.router.navigate(['leavelist']);
                                                                }, (error)=>
                                                                {
                                                                 // this.toast.error({detail: "Leave Page", summary:"Something went wrong, Try again later !!!", duration: 10000}) 
                                                                })
   
                                  
                                }else{
                                    //alert("You have no Maternity leave !!!");
                                    // this.toast.info({detail: "Leave Details", summary: "You have no maternity leave !!", duration:10000}) 
                                     }
                       })
                   }else{
                    //this.toast.info({detail: "Leave Details", summary: "You have no maternity leave !!", duration:10000}) 
                    
                    }
               }   






              
           else if(this.typesOfLeave =="PaternityLeave")
           {
             var savedLeave=this.paternityLeavevar-days;

                  if(savedLeave == 0 || savedLeave>0)
                  {
                     this.leaveService.updatePaternityLeave(savedLeave, this.leaveEmployee.employeeId, this.leaveManage).subscribe(data=>
                      {
                          this.res=data;
                          if(this.res>0)
                            { 
                               const formData=new FormData();
                               formData.append('leaveEmployee', JSON.stringify(this.leaveEmployee));
                               formData.append('file', this.selectedFile);
                                 
                               this.leaveService.saveLeave(this.leaveEmployee).subscribe((data)=>
                                                             {
                                                              // alert("Saved Leave !!!");
                                                             // this.toast.success({detail: "Leave", summary:"Leave saved", duration: 10000})
                                                              this.router.navigate(['leavelist']);
                                                             }, (error)=>
                                                             {
                                                              alert("Failed !!!");
                                                             })

                               
                           }else{
                                  //alert("You have no Paternity leave !!!");
                                 // this.toast.info({detail: "Leave Details", summary: "You have no paternity leave !!", duration:10000}) 
                                }
                       })
                  }else{
                  //  this.toast.info({detail: "Leave Details", summary: "You have no paternity leave !!", duration:10000}) 

                 
                  }
           }




           
                else if(this.typesOfLeave =="BareavementLeave")
                { 
                   var savedLeave=this.bareavementLeavevar-days;

                     if(savedLeave == 0 || savedLeave>0)
                    { 
                     this.leaveService.updateBareavementLeave(savedLeave, this.leaveEmployee.employeeId, this.leaveManage).subscribe(data=>
                       {
                         this.res=data;
                         if(this.res>0)
                             {
                               const formData=new FormData();
                               formData.append('leaveEmployee', JSON.stringify(this.leaveEmployee));
                               formData.append('file', this.selectedFile);
                                 
                               this.leaveService.saveLeave(this.leaveEmployee).subscribe((data)=>
                                                             {
                                                              // alert("Saved Leave !!!");
                                                            //  this.toast.success({detail: "Leave", summary:"Leave saved", duration: 10000})
                                                              this.router.navigate(['leavelist']);
                                                             }, (error)=>
                                                             {
                                                              alert("Failed !!!");
                                                             })

                               
                              }else{
                                //  alert("You have no Bareavement leave !!!");
                               // this.toast.info({detail: "Leave Details", summary: "You have no Bareavement leave !!", duration:10000}) 
                                 
                                   }
                        })
                    }else{
                     // this.toast.info({detail: "Leave Details", summary: "You have no Bareavement leave !!", duration:10000}) 
                  
                       }
                }

     
     
                 else if(this.typesOfLeave =="EarnedLeave")
                 {
                    var savedLeave=this.earnedLeavevar-days;
   
                   if(savedLeave == 0 || savedLeave>0)
                       {
                           this.leaveService.updateEarnLeave(savedLeave, this.leaveEmployee.employeeId, this.leaveManage).subscribe(data=>
                         {
                             this.res=data;
                                  if(this.res>0)
                                {
                                  const formData=new FormData();
                                  formData.append('leaveEmployee', JSON.stringify(this.leaveEmployee));
                                  formData.append('file', this.selectedFile);
                                    
                                  this.leaveService.saveLeave(this.leaveEmployee).subscribe((data)=>
                                                                {
                                                               //   alert("Saved Leave !!!");
                                                             //  this.toast.success({detail: "Leave", summary:"Leave saved", duration: 10000}) 
                                                               this.router.navigate(['leavelist']);
                                                                }, (error)=>
                                                                {
                                                              //    this.toast.error({detail: "Leave Page", summary:"Something went wrong, Try again later !!!", duration: 10000}) 
                                                                })
   
                                  
                                 }else{
                                   //  alert("You have no Earned leave !!!");
                                   //  this.toast.info({detail: "Leave Details", summary: "You have no earned leave !!", duration:10000}) 
                                     }
                          })
                     }else{
                      //this.toast.info({detail: "Leave Details", summary: "You have no earned leave !!", duration:10000}) 
                                    
                                     }
                
                                    }
               
        }
       })

      // this.toast.error({detail: "Leave Page", summary:"Something went wrong, Please try again later", duration: 10000}) 
   } 



    // const formData=new FormData();
    // formData.append('leaveEmployee', JSON.stringify(this.leaveEmployee));
    // formData.append('file', this.selectedFile);
   
   
    // this.leaveService.saveLeaveAndImage(formData).subscribe((data)=>
    // {
    //    alert("Saved Leave !!!");
    //    this.router.navigate(['leavelist']);
    // }, (error)=>
    // {
    //   alert("Failed !!!");
    // })
   // }








  

   //Modal
 
      leaveRecords: any;
      leaveManage: LeaveManage=new LeaveManage();

      displayStyle = "none";
  
     openPopup()
               {
                this.displayStyle = "block";
                this.token=this.loginService.getToken(); 
                this.empId=this.token.employeeId

                 this.leaveService.getSingleEmployeeLeave(this.empId).subscribe(data=>
                           {
                            console.log(data);
                             this.leaveRecords=data;
                           })
            }

          closePopup() {
                      this.displayStyle = "none";
                      }

 }                    
