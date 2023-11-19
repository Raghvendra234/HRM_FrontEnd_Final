import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/services/leave.service';
import { LeaveEmployee } from 'src/app/services/leave';
import { Employee } from 'src/app/services/employee';
import { Router } from '@angular/router';



@Component(
  {
  selector: 'app-leaveemployee-list',
  templateUrl: './leaveemployee-list.component.html',
  styleUrls: ['./leaveemployee-list.component.css']
})


export class LeaveemployeeListComponent implements OnInit
 {
     



    leaveList: Array<any>=[];
    leaveEmployees:any;


    pageObject  = {
                   page: 0,
                   size: 10,
                   totalPage:0,
                   totalElements:0,
                }

    //totalElements: any;

    employee: Employee=new Employee();
    leaveEmployee: LeaveEmployee=new LeaveEmployee();

    constructor(private leaveService: LeaveService,
              private router: Router){
                
              }

  
  
  ngOnInit(): void 
  {
  /* let res=this.leaveService.getLeave();
 
    res.subscribe((data)=>
      {
        console.log(data);
        this.leaveEmployees=data;
       })*/

       this.getPagination();
  }

    

     getPagination()
     {
         this.leaveService.getLeavePagination(this.pageObject.page, this.pageObject.size).subscribe((data: any)=>
            {

              console.log(data);
              this.leaveEmployees=data.content;
              console.log(data.content.totalPages);
              console.log("number");
              this.pageObject.page=data.number;
              console.log(this.pageObject.page);
              
              this.pageObject.totalPage=data.totalPages
              console.log("Data =====================");
              console.log(data.totalElements);
              
              this.pageObject.totalElements=data.totalElements;
              
                  
            })
      }    




     myFuction(event:any,value: any)
     {

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
                            alert("This is a last Page !!!");
         
                          }
      
                   }
              
            }

   

  updateLeave(leaveId: number)
  {
    //this.router.navigate(['updateleave', leaveId]);
  }

  getSalaryById(id: number)
  {
 
  }
  



  public deleteLeave(id: number)
  {
   if(confirm('Are you sure to delete the record ?'))
   {
  // let res=this.leaveService.deletetLeave(id).subscribe(data=>
  let res=this.leaveService.setIsDeletedTrue(id).subscribe(data=>
    {
      this.router.navigate(["admin/leavelist"]);
    },(error)=>
    {
       alert("Failed !!!");
    })
  }
  }



  

  //Advance Search
  searchFilter(typesOfLeave: any, fromDate: any, toDate: any)
  {
   console.log("Inside Leave List");
   console.log(typesOfLeave);
   console.log(fromDate);
   console.log(toDate);

   this.leaveService.advanceSearch(typesOfLeave,fromDate,toDate).subscribe(data=>
    {
      this.leaveEmployees=data;
    })
   
   
       
  }
}
