import { Component, Inject, OnInit } from '@angular/core';
import { AddprojectService } from 'src/app/services/addproject.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { AddProject, Technologies } from 'src/app/addproject';
import { FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component(
  {
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit
{
    employeeData: any;
    teamLeaders: any;
    
    addProject: AddProject=new AddProject();


  //variable of alert feilds
  projectError:AddProject;
  private isCreated: boolean=false;
  private projectExist: boolean=false;
  alert:boolean=false;
  EError:any;



   //Variable of Reactive form
    projectForm: FormGroup;
    dropdownListTech = [];
    dropdownSettingsTech:IDropdownSettings={};
    dropdownListDatabase = [];
    dropdownSettingsDatabase:IDropdownSettings={};
    dropArrayTech : Array<any>=[];
    dropArrayDatabase: Array<any>=[];
    // assignTech="tech";
    // assignData="database";
    techObj: Technologies=new Technologies();
    databaseObj: Technologies=new Technologies();
  //technology: Technologies=new Technologies();


  
    constructor(private addProjectService: AddprojectService,
                private employeeService: EmployeeService,
                private router: Router,
                private fb: FormBuilder,
                private toast: NgToastService,
                private snack: MatSnackBar
                )
                {
      this.projectForm =this.fb.group(
      {
        projectName: '',
        clientName: '',
        fromDate: '',
        toDate: '',
        projectManager: '',
        teamLeader: '',
        technology: '',
        databaseTech:'',
        quantities: this.fb.array([]),
      });
                }




   ngOnInit(): void
   {
    let res=this.employeeService.getDropdown();
    res.subscribe((data)=>
    {
     console.log(data);
     this.employeeData=data;
    })
     this.addProjectService.getProjects().subscribe((data)=>
     {
      this.teamLeaders=data;
     });



//dropDown technology
     this.dropdownListTech = [
      { itemId: 1 , technologyName: 'HTML'},
      { itemId: 2, technologyName: 'CSS' },
      { itemId: 3, technologyName: 'Bootstrap' },
      { itemId: 4, technologyName: 'JavaScript' },
      { itemId: 5, technologyName: 'TypeScript' },
      { itemId: 6, technologyName: 'Angular' },
      { itemId: 7, technologyName: 'React' },
      { itemId: 8, technologyName: 'Java' },
      { itemId: 9, technologyName: 'Hibernate' },
      { itemId: 10, technologyName: 'Spring JDBC' },
      { itemId: 11, technologyName: 'Spring Framework' },
      { itemId: 12, technologyName: 'Spring Boot'},
      { itemId: 13, technologyName: 'JPA'},
      { itemId: 14, technologyName: '.Net' },
      { itemId: 15, technologyName: 'Python'},
    ]; 

    this.dropdownSettingsTech =
    {
      idField: 'itemId',
      textField: 'technologyName',
    };


  //dropDown Database
    this.dropdownListDatabase= [
      { itemId: 1, databaseName: 'MySQL' },
      { itemId: 2, databaseName: 'Oracle' },
      { itemId: 3, databaseName: 'MongoDB' },
      { itemId: 4, databaseName: 'PostgreSQL' },
      { itemId: 5, databaseName: 'MS SQL Server' },
      { itemId: 6, databaseName: 'IBM Db2' },
      { itemId: 7, databaseName: 'Redis' },
      { itemId: 8, databaseName: 'Cassandra' },
      { itemId: 9, databaseName: 'MariaDB' },
      { itemId: 10, databaseName: 'Elasticsearch' }
    ];
    this.dropdownSettingsDatabase ={
        idField: 'itemId',
        textField: 'databaseName',
    };
  }






  formSubmit()
  {
     console.log("this tech fiels ...............");
      this.projectForm.value.tech;
      console.log(this.projectForm.value.tech);
   
      if(this.projectForm.value.projectName.trim()=='' || this.projectForm.value.projectName==null)
      {
       this.snack.open("Project Name is  required !!!",'',{
        duration:3000,
       });
       return;
      }

      if(this.projectForm.value.clientName.trim()=='' || this.projectForm.value.clientName==null)
      {
       this.snack.open("Client Name is  required !!!",'',{
        duration:3000,
       });
       return;
      }

      if(this.projectForm.value.projectManager.trim()=='' || this.projectForm.value.projectManager==null)
      {
       this.snack.open("Project Manager is  required !!!",'',{
        duration:3000,
       });
       return;
      }

      if(this.projectForm.value.projectManager.trim()=='' || this.projectForm.value.projectManager==null)
      {
       this.snack.open("Project Manager is  required !!!",'',{
        duration:3000,
       });
       return;
      }
    
      if( this.projectForm.value.fromDate=='' ||this.projectForm.value.fromDate==null)
      {
        this.snack.open("Starting Date is  required !!!",'',{
          duration:3000,
         });
         return;
      }


      // if( this.projectForm.value.teamLeader=='' ||this.projectForm.value.teamLeader==null)
      // {
      //   this.snack.open("Please select team leader !!!",'',{
      //     duration:3000,
      //    });
      //    return;
      // }

      if( this.projectForm.value.technology=='' ||this.projectForm.value.technology==null)
      {
        this.snack.open("Please select technology !!!",'',{
          duration:3000,
         });
         return;
      }

      if( this.projectForm.value.databaseTech=='' ||this.projectForm.value.databaseTech==null)
      {
        this.snack.open("Please select Database !!!",'',{
          duration:3000,
         });
         return;
      }


      

        this.addProjectService.saveProject(this.projectForm.value).subscribe((data:any)=>
    {
      this.addProject=new AddProject();
      this.isCreated=true;
      this.projectExist=false;
      this.projectError=new AddProject();
      this.toast.success({detail: "Project Detail", summary: "Project has been saved !!!", duration: 1000})
     
     this.router.navigate(["/admin/projectlist"]);
    },(error)=>
    {
      this.projectError=error.error;
      this.isCreated=false;
      if(error.status==400 ||  error.status==500)
      {
        this.isCreated=false;
        this.projectExist=true;
        this.EError=error.error.message;
   
        this.toast.error({detail: "Project Details", summary: error.error.message, duration: 10000})
      }
     
       
    })
}





validate()
{
  var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
}




quantities(): FormArray
{
  return  this.projectForm.get("quantities") as FormArray;
}


addNewEmployee(): FormGroup{
  return this.fb.group(
    {
      employeeId:'',
      technologies:'',
      remark: ''
    }
  )
}


addMoreEmployee()
{
  this.quantities().push(this.addNewEmployee());
}


removeEmployee(i:number) {
  this.quantities().removeAt(i);
}
}