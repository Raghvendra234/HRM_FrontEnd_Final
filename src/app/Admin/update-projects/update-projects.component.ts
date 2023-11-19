import { Component, OnInit } from '@angular/core';
import { AddprojectService } from 'src/app/services/addproject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/services/employee';
import { AddProject } from 'src/app/addproject';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-update-projects',
  templateUrl: './update-projects.component.html',
  styleUrls: ['./update-projects.component.css']
})

export class UpdateProjectsComponent implements OnInit
 {
  
  dataForm: any;
  projectId: number;
  id: number;

  addProject: AddProject=new AddProject();
  employee: Employee=new Employee();

  projects: any[]=[];

  //Variable of Reactive form
  projectForm: FormGroup;
  addEmployeeForm: FormGroup;

  dropdownListTech = [];
  dropdownSettingsTech: IDropdownSettings={};
  dropdownListDatabase = [];
  dropdownSettingsDatabase: IDropdownSettings={};
 
  dropArrayTech :Array<any>=[];
  dropArrayDatabase: Array<any>=[];


  constructor(private addProjectService: AddprojectService,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute) {
              this.route.params.subscribe(parm=> {
                  console.log(parm);
                  this.projectId=parm['id'];
                  console.log("Inside project constructor ======");
                  console.log(this.projectId);
                                                 
                })

      //Reactive from data
      this.addEmployeeForm=this.fb.group({
          
        employeeId: [''],
        technologies:[''],
        remark:[''],
        firstName:['']
         
      })

      

          this.projectForm =this.fb.group({
                  
              projectName: '',
              clientName: '',
              fromDate: '',
              toDate: '',
              projectManager: '',
              teamLeader: '',
              technology: '',
              databaseTech:'',
              
              quantities: new FormArray([this.addEmployeeForm]),
      
            });
                 


             }                      
    
    

  ngOnInit(): void { 
    
    this.addProjectService.getProjectById(this.projectId).subscribe((data)=>{

   
    
    
    

    this.dataForm=data;
    this.projectForm.patchValue(this.dataForm)

    console.log("project Form ==============");
    console.log(this.dataForm);
    
    this.quantities().clear();//clear the extra things
    this.dataForm.quantities.forEach(e => {
    this.quantities().push(this.addNewEmployee(e.employeeId,e.technologies,e.remark,e.firstName));

 });
                 
    },(error)=>
    {
      console.log("Printing Error =======");      
      console.log(error);
    })

   
  
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


this.dropdownSettingsTech ={
    
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




  getEmployeeId(id: number)
  {
   console.log(id);
  }
  

  
 formSubmit()
  {
    this.addProjectService.updateProject(this.projectId, this.projectForm.value).subscribe((data)=>
    {
       console.log(data);

       alert("Success");
       this.router.navigate(['admin/projectlist']);
    },(error)=>
    {
      alert("failed !!!");
    })
  }



  addNewEmployee(id?,tech?,remark?,name?): FormGroup
  {
     return this.fb.group(
      {
        employeeId:[id?id: ''],
        technologies:[tech?tech: ''],
        remark: [remark?remark: ''],
        firstName: [name?name: '']
      }
    )
  }



  quantities(): FormArray
  {
    return  this.projectForm.get("quantities") as FormArray;
  }
  
  
  addMoreEmployee()
  {
    this.quantities().push(this.addNewEmployee());
  }
  
  removeEmployee(i:number) 
  {  
    this.quantities().removeAt(i);  
  }  
  
}
