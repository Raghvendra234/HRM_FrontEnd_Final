import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/services/employee';
import { AddSalary, MonthlyWiseSalary } from 'src/app/services/salary';
import { SalaryService } from 'src/app/services/salary.service';

@Component({
  selector: 'app-update-monthlysalary',
  templateUrl: './update-monthlysalary.component.html',
  styleUrls: ['./update-monthlysalary.component.css']
})
export class UpdateMonthlysalaryComponent implements OnInit
{
 
  monthlySalaryId: any;
  id: any;

  monthlyWiseSalary: MonthlyWiseSalary=new MonthlyWiseSalary();
  employee: Employee=new Employee();




 employeeData: any;



  constructor(private salaryService: SalaryService,
              private route: ActivatedRoute,
              private router: Router)
              {
               this.route.params.subscribe(parm=>
                {
                console.log("Inside UpdateMonthlySalary printing Id............");
                console.log(parm);
                this.monthlySalaryId=parm['id'];
                console.log(this.monthlySalaryId);
                
              //  this.getMonthlySalaryById();
                
                })
              }
  

 ngOnInit(): void 
 {
    this.getMonthlySalaryById(this.monthlySalaryId);
 }


getMonthlySalaryById(monthlySalId: any)
{
  this.salaryService.getMonthlySalaryById(monthlySalId).subscribe((data: any)=>
    {
        console.log("Printing monthly salary...................");
        console.log(data);
        this.monthlyWiseSalary=data;
        console.log("Printing employee datails..........");
        console.log(this.monthlyWiseSalary.employee);
        this.employeeData=this.monthlyWiseSalary.employee;
        console.log("Print.......................2");
        console.log(this.employeeData.employeeId);
        
        

        
        
    })
}

 
getEmployeeId(empId: number)
{
 console.log("EmpId......",empId);
 
}


 formSubmit()
 {
    console.log("Inside Form Submit.............");
    //console.log(this.monthlyWiseSalary);
    console.log(this.monthlyWiseSalary.employeeId);
    //console.log("Printing year and month.......................");
      console.log(this.monthlyWiseSalary.month);
 //   console.log(this.monthlyWiseSalary.years)
    

    this.salaryService.updataMonthlySalary(this.monthlySalaryId,this.monthlyWiseSalary.month, this.monthlyWiseSalary.years,this.monthlyWiseSalary).subscribe((data)=>
    {
      console.log("Monthly Salary updated........");
      console.log(data);
    },
    (error)=>
    {
      console.log(error);
      
    })
        
 }
}
