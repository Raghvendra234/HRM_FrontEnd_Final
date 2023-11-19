import { Component, OnInit } from '@angular/core';
import { connect } from 'rxjs';
import { EmployeeFilesService } from 'src/app/services/employee-files.service';

@Component({
  selector: 'app-employee-files',
  templateUrl: './employee-files.component.html',
  styleUrls: ['./employee-files.component.css']
})
export class EmployeeFilesComponent implements OnInit
{

  selectedFile?: FileList;
  currentFile: any;
  imageName: any;

 constructor(private employeeFileService: EmployeeFilesService){}


  ngOnInit(): void 
  {
    
  }



  selectFile(event: any)
  {
    console.log(event);
    console.log(event.target);
    console.log(event.target.files);
     this.selectedFile=event.target.files;
  }




  uploadFile()
  {
    console.log(this.selectedFile);
    if(this.selectedFile)
    {
    for(let i=0; i<this.selectedFile.length; i++)
    {
      this.uploadMultipleFiles(this.selectedFile[i]);
    }
    }
  }
  


  
   uploadMultipleFiles(file: File)
   {
       const formData: FormData=new FormData();
       console.log("Checkingh============================================================");
       console.log(file);
       console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++=");
       
       
       
       formData.append("files",file)
         console.log(formData);
        this.employeeFileService.uploadMultiplFiles(formData).subscribe((data)=>
        {
          alert("Failed!!!");
        },(error)=>
        {
          alert("Saved !!!");
        })
   }





}
