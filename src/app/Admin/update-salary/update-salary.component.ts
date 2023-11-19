import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/services/employee';
import { AddSalary } from 'src/app/services/salary';
import { SalaryService } from 'src/app/services/salary.service';


@Component({
  selector: 'app-update-salary',
  templateUrl: './update-salary.component.html',
  styleUrls: ['./update-salary.component.css']
})

export class UpdateSalaryComponent implements OnInit
{
    salaryId: number;
    id: number;

    addSalary: AddSalary=new AddSalary();
    employee:  Employee=new Employee();

    constructor(private salaryService: SalaryService,
                private route: ActivatedRoute,
                private  router: Router)
                {
                  this.route.params.subscribe(parm=>
                    {
                      console.log(parm);
                      this.salaryId=parm['id'];

                    })
                }

  ngOnInit(): void 
  {
    
 

    
    
    this.salaryService.getSalaryById(this.salaryId).subscribe(data =>
    {
      console.log(data);
      this.addSalary=data;
    }, error=> console.log(error));
  }

  updateSalary()
  {

  }

  getEmployeeId(a:any){
    console.log(a);
    
  }


  formSubmit()
  {

   this.salaryService.updateSalary(this.salaryId, this.addSalary).subscribe((data)=>
   {
    console.log(data);
    console.log("Printing Employee..............Id");
    console.log(this.addSalary.employeeId);
    
    
    alert("Updated !!!");
    this.router.navigate(["admin/salarylist"]);
   }, (error)=>
   {
      alert("failed");
   })


  }
}
