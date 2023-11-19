import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadfileService } from 'src/app/services/uploadfile.service';
@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})


export class UploadfilesComponent implements OnInit 
{

  selectedFile: File;
  currentFile: File;
  imageName: any;
 

  fileInfos: Observable<any>;
//  uploadImageData: File;

  constructor(private uploadService: UploadfileService) { }
  

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles(this.imageName);
  }



  selectFile(event) 
  {
    console.log(event);
    console.log(event.target);
    this.selectedFile = event.target.files[0];
  }



  upload() {
   
    console.log(this.selectedFile);
 
    const fd =  new FormData;
    fd.append('image',this.selectedFile);

    this.uploadService.uploadImage(fd).subscribe((data)=>
    {
      console.log("inside upload method ===============");
      console.log(data);
        alert("Saved...");

  }, (error) => {
    console.log(error);
    alert("Failed");
      });
  
    this.selectedFile = undefined;
  }




  getImage()
  {

  }

  
}
