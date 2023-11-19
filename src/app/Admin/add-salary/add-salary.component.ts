import { Component, OnInit } from '@angular/core';
import { SalaryService } from 'src/app/services/salary.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddSalary } from 'src/app/services/salary';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit
{

  employeeData:any;

  addSalary: AddSalary=new AddSalary()

  constructor(private salaryService: SalaryService,
               private employeeService: EmployeeService,
               private router: Router,
               private snack: MatSnackBar){}

  ngOnInit(): void
   {
    
    let res=this.employeeService.getDropdown();  
    res.subscribe((data)=>
    {
     console.log(data);
     this.employeeData=data;
    })
   }


  formSubmit()
  {

    if( this.addSalary.employeeId==null)
    {
      this.snack.open("Please select employee !!!",'',{
        duration:3000,
       });
       return;
    }

    if( this.addSalary.basicSalary=='' || this.addSalary.basicSalary==null)
    {
      this.snack.open("Basic Salary is required!!!",'',{
        duration:3000,
       });
       return;
    }

    if( this.addSalary.houseRentAllowance=='' || this.addSalary.houseRentAllowance==null)
    {
      this.snack.open("House Rent Allowance is required!!!",'',{
        duration:3000,
       });
       return;
    }

   this.salaryService.saveSalary(this.addSalary).subscribe((data)=>
   {
     alert("Saved !!!");
     this.router.navigate(["admin/salarylist"]);
   }, (error)=>
 {
    alert(" Failed !!!");
 }
  )
  }

  
  validate()
  {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }

}
