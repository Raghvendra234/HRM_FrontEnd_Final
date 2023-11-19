import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit
 {
    // employees: Employee[];

  employeeList :Array<any>=[];
  employees:any;

  pageObject ={

    page: 0,
    size: 10,
    totalPage:0
  }
  

  
    constructor(private employeeService: EmployeeService, private router: Router)
    {}
  
    
    ngOnInit(): void 
    {
      // let resp=this.employeeService.getEmployee();
      //  resp.subscribe((data)=>
      //   {
      //  //   console.log(data);
          
      //     this.employees=data;
      //   });
    
      this.getPagination();
    }


      getPagination()
      {
        this.employeeService.getEmployeePagination(this.pageObject.page, this.pageObject.size).subscribe((data:any)=>
        {
          console.log(data);
            this.employees=data.content;
            this.pageObject.page=data.number;
            console.log(this.pageObject.page);
             this.pageObject.totalPage=data.totalPages
        })
      }

      // asd(a){
      //   this.router.navigate(['employeelist/'+a])
      // }
  

      myFuction(event:any,value: any)
      {
          //console.log(event);
           if(event == 'prev')
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
            
           if(event =='next' && this.pageObject.totalPage >this.pageObject.page)
           {
             this.getPagination();
             console.log("Next b");
             
           }else
           {
            alert("This is last Page !!!");
           }
 
           }
         
    }
        
                 
                      
       


    public deleteEmployee(id: number)
    {
            
      if(confirm('Are you sure to delete the record ?'))
      {
        //this.employeeService.deleteEmployee(id).subscribe(data=>
        this.employeeService.setIsDeletedTrue(id).subscribe(data =>
        {
          this.router.navigate(["admin/employeelist"]);
        },(erro)=>
        {
          alert("Failed !!!");
        })
      }

    }
  
   

    
    updateEmployee(employeeId:number)
    {
     this.router.navigate(['updateemployee',employeeId]);
    }

  



    getEmployeeById(id:any)
    {
    }


    getDetails(employeeId:number)
    {
     this.router.navigate(['employeelist/detailspage/',employeeId]);
    }
    



    // Related Search 

    keywordSearch: any;

    search(keyword: any)
    {
     console.log(keyword);
     this.employeeService.searchData(keyword).subscribe(data=>
      {
        console.log(data);
        this.employees=data;
      })
    }



      //Advance Search 
  searchFilter(firstName: any, lastName: any, designation:any)
  {
    console.log("Inside Employee list ==============");
    console.log(firstName);
    console.log(lastName);
    console.log(designation);
    
    
    
    
    this.employeeService.advanceSearch(firstName,lastName,designation).subscribe(data=>
    {
      this.employees=data;
    }
    )
  }

  }
























    // this.employeeService.getEmpLIst().subscribe(data =>
    //   {
    //     this.employees = data;
    //   })
    // throw new Error('Method not implemented.');
    //this.getfetchEmpolyee();
  
 
 // getfetchEmpolyee(){
    //this.employeeService.getEmployee().subscribe({
     //next:(data)=>{
      //  this.employeeList = data;
       // console.log((this.employeeList));
        
     // }
    //})
  //}

//}
    
  
  