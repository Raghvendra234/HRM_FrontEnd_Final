import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseURL from './help';
import { AddSalary, MonthlyWiseSalary } from './salary';

@Injectable({
  providedIn: 'root'
})


export class SalaryService
 {

  constructor(private httpClient: HttpClient) { }



  getSalary()
  {
    return this.httpClient.get(`${baseURL}/api/addsalary`);
  }

  getAverageSalary()
  {
    return this.httpClient.get(`${baseURL}/api/addsalary/averagesalary`)
  }

  


  //Save Main Salary
  saveSalary(addSalary: AddSalary)
  {
    return this.httpClient.post(`${baseURL}/api/addsalary`, addSalary);

  }

  //Savae Salary Monthly Wise
  SaveMonthlySalary(monthlyWiseSalary: MonthlyWiseSalary)
  {
    return this.httpClient.post(`${baseURL}/api/monthlysalary/save`,monthlyWiseSalary);
  }



  updateSalary(salarId:any, addSalary: AddSalary)
  {
   return this.httpClient.put(`${baseURL}/api/addsalary/${salarId}`, addSalary);
  }




  getSalaryById(salarId: number): Observable <AddSalary>
  {
   return this.httpClient.get<AddSalary>(`${baseURL}/api/addsalary/${salarId}`);

  }

  // Get Salary from MianSalary(Add Salary class) by pass EmployeeId
  getMianSalary(EmployeeId: any): Observable <MonthlyWiseSalary> 
  {
       return this.httpClient.get<MonthlyWiseSalary>(`${baseURL}/api/addsalary/salary/empId/${EmployeeId}`)
  }



  deleteLeave(id: number)
  {
   return this.httpClient.delete(`${baseURL}/api/addsalary/${id}`);
  }

  
  getSalaryPagination(pageNumber=0, pageSize=5)
  {
    return this.httpClient.get(`${baseURL}/api/addsalary/paginations?page=${pageNumber}&size=${pageSize}`);
  }


  //Download Salary Slip
  salarySlip(id:any)
  {
        return this.httpClient.get(`${baseURL}/api/addsalary/salaryslippdf/${id}`);
  }


  //Search Salary 
  // 
    //Related To Advance Search
    advanceSearch(basic_salary:any, gross_salary: any)
    {
     return this.httpClient.get(`${baseURL}/api/addsalary/advancesearch?basic_salary=${basic_salary}&gross_salary=${gross_salary}`);
    } 



    //Set is_deleted=true
    setIsDeletedTrue(salaryId: any)
    {
      return this.httpClient.put(`${baseURL}/api/addsalary/setisdeletedtrue/${salaryId}`,salaryId);
    }


    
    
    
    //All code of Monthly wise salary  Start here
    
    
    //Get all monthly salary list with pagination
    getAllMonthlySalary(pageNumber=0, pageSize=5)
    {
      return this.httpClient.get(`${baseURL}/api/monthlysalary/getallmonthlysalary?page=${pageNumber}&size=${pageSize}`);
    }


    //Advance Search
    advanceSearchMonthly(month: any, years: any)
    {
      return this.httpClient.get(`${baseURL}/api/monthlysalary/advancesearch?month=${month}&years=${years}`);
    }



    //Get Salary By passing Employee Id
    getSalaryByPassingEmpId(empId: any)
    {
      return this.httpClient.get(`${baseURL}/api/addsalary/salary/empId/${empId}`);
    }

    //Get  Monthly Salary By Passing id
  public getMonthlySalaryById(monthlyId: any)
  {
    return this.httpClient.get(`${baseURL}/api/monthlysalary/getmonthlysalarybyid/${monthlyId}`);
  }

  //Update Monthly Salary
  public updataMonthlySalary(monthlyId:number, month: string, year: string, monthlyWiseSalary: MonthlyWiseSalary)
  {
         return this.httpClient.put(`${baseURL}/api/monthlysalary/update/${monthlyId}/${month}/${year}`,monthlyWiseSalary);
  }

}
