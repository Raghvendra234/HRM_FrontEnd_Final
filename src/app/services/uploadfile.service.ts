import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseURL from './help';

@Injectable({
  providedIn: 'root'
})
  
  export class UploadfileService  
  {
  constructor(private http: HttpClient) { }

  
  uploadImage(file: any)
  {
     return this.http.post<any>(`${baseURL}/api/fileSystem`,file)
  }



  getFiles(imageName: string) 
  {
    return this.http.get(`${baseURL}/files`);
  }


  getImage()
  {
    
  }
}
