import { Employee } from "./services/employee";

export class AddProject
{
     projectId: number;
	 projectName: string;
	 clientName: string;
	 teamLeader: string;
	 developingTechnology: any;
	 databaseTechnology: any;
     fromDate: string;
     toDate: string;
	 projectManager: string;
	 
	 employeeId:number;
	 employee: Employees;
	 
	 addEmployeeOnProject:any;
	 
	 technology: Array<Technologies>=[];
	 databaseTech: Array<DatabasesTech>=[];
}

   
export class Technologies
{
	technologyId: any;
	technologyName: any;

}

export class DatabasesTech
{
   databaseId: any;
   databaseName: any;
}


export class Employees
{
	firstName:any;
	emailId:any;
	employeeId:any;
}