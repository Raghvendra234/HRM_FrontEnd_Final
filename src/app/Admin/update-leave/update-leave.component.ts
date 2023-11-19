import { Component, OnInit } from '@angular/core';
import { LeaveEmployee } from 'src/app/services/leave';
import { LeaveService } from 'src/app/services/leave.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/services/employee';
@Component({
  selector: 'app-update-leave',
  templateUrl: './update-leave.component.html',
  styleUrls: ['./update-leave.component.css']
})
export class UpdateLeaveComponent implements OnInit
{
  
  leaveId: number;
  id: number;

  leaveEmployee: LeaveEmployee=new LeaveEmployee();
  employee: Employee=new Employee();

  constructor(private leaveService: LeaveService,
               private router: ActivatedRoute)
               {
                 this.router.params.subscribe(parm=>
                  {
                    console.log(parm);
                    this.leaveId=parm['id'];
                  })

               }




  ngOnInit(): void {
    
    this.leaveService.getLeaveById(this.leaveId).subscribe(data =>
      {
        console.log(data);
        this.leaveEmployee=data;
      }, error=> console.log(error));
  }


  getEmployeeById(id: number)
  {
    console.log(id);
  }






  formSubmit()
  {
    
    this.leaveService.updateLeave(this.leaveId, this.leaveEmployee).subscribe((data)=>
    {
     console.log(data);
 
     alert("Updated !!!");
    })
     alert(" Failed !!!");
   
   
  }
}
