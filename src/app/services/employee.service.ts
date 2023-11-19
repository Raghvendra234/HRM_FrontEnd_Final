import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import baseURL from './help';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

//  private baseURL = "";

  constructor(private httpClient: HttpClient) { }

  
  addEmployee(employee:Employee)
  {

    return this.httpClient.post(`${baseURL}/api/employee/save`,employee);
  }
  addEmployees(employee:Employee)
  {

    return this.httpClient.post(`${baseURL}/api/employee/saves`,employee);
  }
  


  

    getDesignation(designation:any):Observable<any>
    {
      return this.httpClient.get<any>(`${baseURL}/api/employee/designation/${designation}`);
    }

    CountEmployee()
    {
     return this.httpClient.get(`${baseURL}/api/employee/empcount`);
   
    }

    countGender(gender: any): Observable<any>
    {
      return this.httpClient.get(`${baseURL}/api/employee/gender/${gender}`);
    }


   //Delete Data 
   deleteEmployee(id:number)
    {
      return this.httpClient.delete(`${baseURL}/api/employee/${id}`);
    }

    //Not Delete Data Permanently Data from Database 
    setIsDeletedTrue(empId)
    {
       return this.httpClient.put(`${baseURL}/api/employee/setisdeleted/${empId}`,empId);
    }

  
    updateEmployee(employeeId:any, employee:Employee)
    {
      return this.httpClient.put(`${baseURL}/api/employee/${employeeId}`,employee);
    }

    
    getEmployeeById(employeeId: number): Observable<Employee>
    {
        return this.httpClient.get<Employee>(`${baseURL}/api/employee/${employeeId}`);
    }


    getDropdown()
    {
      return this.httpClient.get<Employee>(`${baseURL}/api/employee/dropdown`);
    }

    
    getEmployeePagination(pageNumber=0,pageSize=5)
    {
       return this.httpClient.get(`${baseURL}/api/employee/isdeleted?page=${pageNumber}&size=${pageSize}`);
    }





    //Related to Upload files Code 

    //Save Image
    uploadFiles(employeeId: any,typeOfFile:any, file: any)
    {
       return this.httpClient.post<any>(`${baseURL}/api/uploadmultiple/${employeeId}/${typeOfFile}`, file);
    }



   //Download Ressume

   downloadFile(employeeId: any, typeOfFile:any): Observable<Blob>
   {
    return this.httpClient.get(`${baseURL}/api/downlaodfile/${employeeId}/${typeOfFile}`,
       {
        responseType: 'blob'
       });
   }


   
   //Related to Search
   searchData(keyword:any)
   {
     return this.httpClient.get(`${baseURL}/api/employee/search/${keyword}`);
   }


   

   //Related to Login
   login(employee: Employee)
   {
     return this.httpClient.post(`${baseURL}/api/employee/login`, employee);
   }


   //Send OTP to user
   sendOTP(email: any)
   {
     return this.httpClient.post(`${baseURL}/api/forgot`, email);
   }


   otpVerify(otp: any)
   {
      return this.httpClient.post(`${baseURL}/api/verify-otp`,otp);
   }


   updatePassword(password: any)
   {
     return this.httpClient.put(`${baseURL}/api/changepassword`, password)
   }

   //Realated To advance Seacrg
   advanceSearch(first_name:any, last_name: any, designation: any)
   {
    return this.httpClient.get(`${baseURL}/api/employee/advancesearch?first_name=${first_name}&last_name=${last_name}&designation=${designation}`);
   }
  }















