import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/services/employee';
import { SalaryService } from 'src/app/services/salary.service';

@Component({
  selector: 'app-monthly-wise-salary-list',
  templateUrl: './monthly-wise-salary-list.component.html',
  styleUrls: ['./monthly-wise-salary-list.component.css']
})
export class MonthlyWiseSalaryListComponent implements OnInit
{



  salaryList :Array<any>=[];
  salary:any;

  
   pageObject  = {
                  page : 0,
                  size: 10,
                  totalPage:0
                  }


  emplpoyee: Employee=new Employee();
  //addSalary: AddSalary=new AddSalary();

  constructor(private salaryService: SalaryService,
              private router: Router){}
  
  
  
  ngOnInit(): void 
  {
   
    this.getPagination();
  }

   
     getPagination()
     {
      this.salaryService.getAllMonthlySalary(this.pageObject.page, this.pageObject.size).subscribe((data: any)=>
      {
        console.log("Printing Salary Slip ");
        
        console.log(data);
        this.salary=data.content;
        this.pageObject.page=data.number;
        console.log(this.pageObject.page);
     //   console.log("page");
        
        this.pageObject.totalPage=data.totalPages;
       // console.log(this.pageObject.totalPage);
      })
     }



       myFuction(event: any,value: any)
       {
          
         if(event =='prev')
          {
            this.pageObject.page = value- 1;
            if(this.pageObject.page >-1 && event =='prev' && this.pageObject.totalPage >this.pageObject.page)
            {
              this.getPagination();
              console.log("prev B");
              
            }
          }

          
          if(event == 'next')
          {
          this.pageObject.page = value+1;
           
          if(event =='next' && this.pageObject.totalPage>this.pageObject.page)
          {
           console.log(this.pageObject.totalPage);
            this.getPagination();
            console.log("Next b");
            
          }else
          {
           alert("This is last Page !!!");
          }

          }

       }


       searchFilter(month: any, years:any)
       {
        console.log("Printing data");
        console.log(month);
        console.log(years);
        
        this.salaryService.advanceSearchMonthly(month,years).subscribe((data: any)=>
          {
            console.log("Printing The Data inside Monthly Wise Salary");
            console.log(data);
            
            this.salary=data.content;
            
          })
      }

    updateMonthlySalary(salaryId: number)
    {
      this.router.navigate(['updatemonthlysalary', salaryId]);
    }

}
