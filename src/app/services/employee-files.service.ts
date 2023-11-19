import { Injectable } from '@angular/core';
import baseURL from './help';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeFilesService 
{

  constructor(private httpClient: HttpClient) { }

  uploadMultiplFiles(file: any)
  {

   return this.httpClient.post<any>(`${baseURL}/api/uploadmultiple`, file);
  }


  uploadMultiple(employeeId: any, file: any)
  {
    return this.httpClient.post<any>(`${baseURL}/api/uploadmultiple/{employeeId}`, file);
  }
}
