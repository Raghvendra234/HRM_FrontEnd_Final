import { Employee } from "./employee";

export class LeaveEmployee
{
    leaveId: number;
    fromDate: string;
    toDate: string;
    reasonToLeave: String;
    employeeId:number;
    typesOfLeave:any;

    employee: Employee;
    leaveImage: any;
 
}

export class LeaveManage
{

     leaveManageId:any;
     casualLeave:any;
     sickLeave:any;
     marriageLeave:any;
	 maternityLeave:any;
	 paternityLeave:any;
	 bareavementLeave :any;
     earnedLeave: any;

     employee: any;
    
}