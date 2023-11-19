import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddProject } from '../addproject';
import baseURL from './help';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddprojectService {

  pageNumber=0;
  pageSize

  constructor( private httpClient: HttpClient) { }


  
  saveProject(addproject: AddProject)
  {
    return this.httpClient.post(`${baseURL}/api/addproject/save`, addproject);
  }

  getProjectname( projectName:any):Observable<any>
  {
    return this.httpClient.get<any>(`${baseURL}/api/addproject/pro/${projectName}`);
  }

  getProjectCount(){
    return this.httpClient.get(`${baseURL}/api/addproject/projectcount`)
  }


  getProjects()
  {
    return this.httpClient.get(`${baseURL}/api/addproject`);
  }
  

 
  //Delete Project Permanently
  deleteProject(id:number)
  {
    return this.httpClient.delete(`${baseURL}/api/addproject/${id}`);
  }

  //Not Delete permanently
   setIsDeletedTrue(projectId: any)
   {
    return this.httpClient.put(`${baseURL}/api/addproject/setisdeletedtrue/${projectId}`,projectId)
   }  
  
  updateProject(projectId:any, addProject: AddProject)
  {
     return this.httpClient.put(`${baseURL}/api/addproject/${projectId}`, addProject);
  }

 

  getProjectById(projectId: number): Observable<AddProject>
  {
    return this.httpClient.get<AddProject>(`${baseURL}/api/addproject/proj/${projectId}`);
  }


  
   
  getProjectPagination(pageNumber=0, pageSize=5)
  {
    return this.httpClient.get(`${baseURL}/api/addproject/pagination?page=${pageNumber}&size=${pageSize}`);
  }
  
  
  //Related to Search

  //Advance Search
  advanceSearch(project_name:any, client_name: any, project_manager: any, team_leader:any)
  {
   return this.httpClient.get(`${baseURL}/api/addproject/advancesearch?project_name=${project_name}&client_name=${client_name}&project_manager=${project_manager}&team_leader=${team_leader}`);
  }
  
 

  //Global Search
  searchRecord(keyword:any)
  {
     return this.httpClient.get(`${baseURL}/api/addproject/search/${keyword}`);
  }



}
