import { Employee } from "./employee";

export class AddSalary
{
         salaryId: number;
	     employeeName: string;
         months: string;
	     amount: number;
        
         totalSalary: any;
         inHandSalary: any;
         pf: any;
         esi: any;
         medicalInsurance: any;
         workingDaysInMonths: any;
	
         uanNumber: any;
	     esiCode: any;
	     basicSalary: any;
	     houseRentAllowance: any;
	     dearnessAllowance: any;
	     splAllowance: any;
	     childrenEducationAllowance: any;
	     incentives:any;
	     groupInsurance: any;
	     taxDeductedAtSources: any;
	     grossSalary: any;
	     esic3: any;
	
		 employeeId:number;
         employee:Employees;
}

export class MonthlyWiseSalary
{
     monthlySalaryId: any;
	 pf: any;
	 esi: any;
	 medicalInsurance: any;
	 uanNumber: any;
	 esiCode: any;
	 basicSalary: any;
	 houseRentAllowance: any;
	 dearnessAllowance: any;
	 splAllowance: any;
	 childrenEducationAllowance: any;
	 incentives: any;
	 groupInsurance: any;
	 taxDeductedAtSources: any;
	 grossSalary: any;
	 esic3: any;
	
	 month: any;
	 years: any;
	 workedDays: any;
		
	 employeeId:number;
	 employee: Employee;
	
 
}


export class Employees{
	firstName:any;
	emailId:any;
	employeeId:any;
}
