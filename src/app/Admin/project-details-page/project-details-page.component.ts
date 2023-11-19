import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { AddProject } from 'src/app/addproject';
import { AddprojectService } from 'src/app/services/addproject.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.css']
})

export class ProjectDetailsPageComponent implements OnInit 
{
  id: any;
  projectId: any;
  projectData: any;

  databaseName: any[]=[];
  addProject: AddProject=new AddProject();

  projectForm: FormGroup;
  technologyAllName: any;

  nameOfTechnology: any[]=[];
  nameOfDatabase: any[]=[];
  nameOfEmployeeOnProject: any[]=[];
  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: AddprojectService)
  {
    this.route.params.subscribe(parm=>
      {
        console.log("Printing Data Inside project Details============");
        console.log(parm);
        this.projectId=parm['id'];
      })
  }




  ngOnInit(): void 
  {
    this.getProjectDetails();
  }
  


  getProjectDetails()
  {
 
   this.projectService.getProjectById(this.projectId).subscribe((data: any)=>
    {
        this.projectData=data;
        this.addProject=data;
       
        console.log("Technology Name");
        console.log(data);

        this.technologyAllName=data;
        console.log(this.technologyAllName.technology);

        this.nameOfTechnology=this.technologyAllName.technology;
        this.nameOfDatabase=this.technologyAllName.databaseTech;
        this.nameOfEmployeeOnProject=this.technologyAllName.quantities;

      
    })
    
  }
}


