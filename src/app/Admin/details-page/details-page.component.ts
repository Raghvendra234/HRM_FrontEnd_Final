

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, Employee, Qualification } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import baseURL from 'src/app/services/help';
import { LeaveManage } from 'src/app/services/leave';
import { LeaveService } from 'src/app/services/leave.service';
import { SalaryService } from 'src/app/services/salary.service';



@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})


export class DetailsPageComponent implements OnInit 
{





  employeeList :Array<any>=[];

   employeeId:number;
   id: number;
  //details:Array<any>=[];
    employeedetails:any;
 //employeedetails: Employee=new Employee();
   employee: Employee=new Employee();
   address: Address=new Address();
   qualification: Qualification=new Qualification();

   allPreviousExperience: any;
   employeePreviousExperience=[];

   //Related to Image
     typeof="image";
     fileType="resume"

 

   //End  here  Related of image Variable

   salaryData: any;

   leftLeave: any;



  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute, 
              private httpClient: HttpClient,
              private leaveService: LeaveService,
              private router: Router,
              private salaryService: SalaryService)
  {
    this.route.params.subscribe(parm=>
      {
        console.log(parm);
        this.employeeId=parm['id'];
      })
  }




  

  ngOnInit(): void 
  {
  
    this.getEmployeeDetails();
 
    this.getLeaveDetails();

    this.getSalaryDetails();
   
  }



  getEmployeeDetails()
{
  this.employeeService.getEmployeeById(this.employeeId).subscribe((data: any)=>  
  {
    this.employeedetails=data;

    this.allPreviousExperience=data;
    console.log("Printing Experience.............");
    console.log(this.allPreviousExperience.employeeExperiences);
  
    this.employeePreviousExperience=this.allPreviousExperience.employeeExperiences;
    console.log("Employee Experience   11111111-----------");
    console.log(this.employeePreviousExperience);
    
    
  }, (error)=>
  {
   console.log(error);
  })
}




getLeaveDetails()
{
  this.leaveService.getSingleEmployeeLeave(this.employeeId).subscribe(data=>
    {
      console.log("Left Leave +++++++++++++++++++++++++++++++++++++++++++++=");
      console.log(data);
      this.leftLeave=data;
                
    })
}





getSalaryDetails()
{
  this.salaryService.getSalaryByPassingEmpId(this.employeeId).subscribe(data=>
    {
      console.log("Printing Salary Data==========");
      console.log(data);
      
      this.salaryData=data;
    })
}





  //Related to Uploads  Files Codes Here 
  
   SelectFile: File;
   currentFile: File;


  selectFile(event,id, typeOfFile:any)
  {
      console.log("Types ++++++++++++++++++++++++++++++++++++");
      console.log(typeOfFile);
      console.log("++++++++++++++++++++++++++++++++++++");
      
      console.log(event.target.files);
       this.SelectFile=event.target.files[0];
       this.uploadFile(id,typeOfFile)
    }



  uploadFile(empId: any, typeOfFile)
  {
    
   const formData: FormData=new FormData();
   console.log("Inside Form Data==========================");
   console.log(empId);
   console.log("+++++++++++++++++++++++++++++");
   console.log(this.SelectFile)
       
   formData.append("files", this.SelectFile);

   this.employeeService.uploadFiles(empId,typeOfFile, formData).subscribe((data)=>
   {
    alert("Failed !!!");
   },(error)=>
   {
     alert("Saved!!!");
   });

  }



  downloadFile()
  {
    console.log("Download files +++++++++++++++++++++++++++++++++++++++++++");
    console.log(this.employeeId);
    console.log(this.fileType);
    
    this.downloadResume(this.employeeId,this.fileType);

  }


 //Display Resume
  downloadResume(empId:any, typeOfFiles:any)
  {
    this.httpClient.get<any>(`${baseURL}/api/getfile/${empId}/${typeOfFiles}`).subscribe(blob=>
      {
        console.log("Inside DownlaodResume =================================");
        console.log(blob);
 
        
      })
   
  }



  
  //Add Leave
  
    leaveManage: LeaveManage=new LeaveManage();
    displayStyle = "none";

  openPopup()
             {
              console.log("Open Function is  calling...........");
              
              this.displayStyle = "block";
             
          }

        closePopup(){
                    this.displayStyle = "none";
                    }







       leaveSubmit()
       {
        console.log("Leave Manage =================");
        console.log(this.leaveManage);
        console.log(this.employeedetails.employeeId);
        
        this.leaveService.saveLeaveManage(this.leaveManage,this.employeedetails.employeeId).subscribe(data=>
          {
            alert("Saved !!!");
            this.router.navigate(['employeelist']);
           },(error)=>
           {
             alert("Failed !!!");
           });
        
        
       }     
       
       



}
