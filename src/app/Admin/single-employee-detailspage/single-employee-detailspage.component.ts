import { Component, OnInit } from '@angular/core';
import { Address, Employee, Qualification } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { LeaveService } from 'src/app/services/leave.service';
import { SalaryService } from 'src/app/services/salary.service';

@Component({
  selector: 'app-single-employee-detailspage',
  templateUrl: './single-employee-detailspage.component.html',
  styleUrls: ['./single-employee-detailspage.component.css']
})
export class SingleEmployeeDetailspageComponent implements OnInit 
{

  employeeIdLocalStorage: any;
 
  empId: number;

  employeedetails: any;
  employeePreviousExperience: any;
  leftLeave: any;
  salaryData:any;
  typeof="image";
  leaveManage: any;
  allPreviousExperience: any;



   employee: Employee=new Employee();
   address: Address=new Address();
   qualification: Qualification=new Qualification();

  constructor(private employeeService: EmployeeService,
              private leaveService: LeaveService,
              private salaryService: SalaryService){}

  ngOnInit(): void 
  {
    console.log("Single Employee Details page............................");
    console.log(localStorage.getItem("empId"));
    this.employeeIdLocalStorage=localStorage.getItem("empId");
    console.log("Checking the type.......................");
    console.log(typeof this.employeeIdLocalStorage);

    this.empId=+this.employeeIdLocalStorage;
    console.log(typeof this.empId);
    console.log(this.empId);
    
    
    
    
   
    this.getEmployeeDetails(this.empId)
    this.getLeaveDetails(this.empId);
    this.getSalaryDetails(this.empId);

    
  } 
  
  getEmployeeDetails(id: number)
  {
    this.employeeService.getEmployeeById(id).subscribe((data: any)=>  
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

  
 

  getLeaveDetails(id: number)
  {
    this.leaveService.getSingleEmployeeLeave(id).subscribe(data=>
      {
        console.log("Left Leave +++++++++++++++++++++++++++++++++++++++++++++=");
        console.log(data);
        this.leftLeave=data;
                  
      })
  }
  
  
  
  
  
  getSalaryDetails(id: number)
  {
    this.salaryService.getSalaryByPassingEmpId(id).subscribe(data=>
      {
        console.log("Printing Salary Data==========");
        console.log(data);
        
        this.salaryData=data;
      })
  }
  


}
