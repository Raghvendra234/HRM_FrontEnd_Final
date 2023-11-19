import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeService } from 'src/app/services/employee.service';
import { AddSalary, MonthlyWiseSalary } from 'src/app/services/salary';
import { SalaryService } from 'src/app/services/salary.service';
import { NgToastComponent, NgToastService } from 'ng-angular-popup'
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-wise-salary',
  templateUrl: './monthly-wise-salary.component.html',
  styleUrls: ['./monthly-wise-salary.component.css']
})
export class MonthlyWiseSalaryComponent  implements OnInit
{


   employeeData: any;
   empId: any;
   empName: any
  

   //variable of alert feilds 
  projectError:MonthlyWiseSalary;
  private isCreated: boolean=false;
  private projectExist: boolean=false;
  alert:boolean=false;
  EError:any;

  monthlyWiseSalary: MonthlyWiseSalary=new MonthlyWiseSalary();


  

  constructor(private employeeService: EmployeeService,
              private salaryService: SalaryService,
              private toast: NgToastService,
              private router: Router
             )
             {}


  ngOnInit(): void {
    let res=this.employeeService.getDropdown();  
    res.subscribe((data)=>
    {
     console.log(data);
     this.employeeData=data;
    })
  }



  formSubmit()
  {
  console.log("Inside Form Submit ====================");
  console.log(this.empId);
    
  this.monthlyWiseSalary.employeeId=this.empId;
  this.salaryService.SaveMonthlySalary(this.monthlyWiseSalary).subscribe((data)=>
  {
    alert("Saved !!!");
    this.router.navigate(["/admin/monthlysalarylist"]);
      
  }, (error)=>
{

      console.log(error.error);
      this.toast.info({detail: "Salary Records", summary: error.error, duration:10000})
})

  } 

  getEmployeeId(event: any)
  {
    console.log(event.target.value)
    console.log("Method is calling.......");
    

    this.salaryService.getMianSalary(event.target.value).subscribe((data)=>
    {
      console.log(" Printting data from method ........");
      console.log(data);
      this.monthlyWiseSalary=data;
      console.log("Printing the data =========");
      console.log(this.monthlyWiseSalary);

      console.log("Printing Id ..............");
      console.log(this.monthlyWiseSalary.employee.employeeId);
      this.empId=this.monthlyWiseSalary.employee.employeeId;
               
    })
    }


}
