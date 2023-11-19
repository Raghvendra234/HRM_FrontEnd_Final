import { Component, OnInit } from '@angular/core';
import { AddprojectService } from 'src/app/services/addproject.service';
//import { AddProject } from 'src/app/services/addproject';
import { Employee } from 'src/app/services/employee';
import { Router } from '@angular/router';
import { AddProject } from 'src/app/addproject';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit
 {


  //For Search
  addProj: AddProject=new AddProject();
   
  //check:boolean;
   
   pageObject  = {
                 page : 0,
                 size: 10,
                 totalPage:0,
                 totalElements:1,
                 numberofElement:0
                  }
  

    addProjects:any;
    employee: Employee=new Employee();



  constructor(private addProjectService: AddprojectService, private router: Router){}


  ngOnInit(): void 
  {
    this.getPagination();
  }
  
  


  getPagination(){
    {
      let res=this.addProjectService.getProjectPagination(this.pageObject.page, this.pageObject.size);
   
      res.subscribe((data: any)=>
      {
        
       console.log(data);
        
       this.addProjects=data.response.content;
       this.pageObject.page = data.response.number;
       console.log("page");
       console.log(this.pageObject.page);
       
       this.pageObject.totalPage=data.response.totalPages;
       console.log(this.pageObject.totalPage);
       
       this.pageObject.totalElements=data.response.totalElements;
       this.pageObject.numberofElement=data.response.numberofElements;
       console.log(data.response.numberofElements);
       
      })
  }
}
  

        // myFuction(event:any,value: any)
        // {
        //         console.log(event);
        //          if(event == 'prev')
        //             {
        //               this.pageObject.page = value- 1;
        //                     if(this.pageObject.page >=0  )
        //                       {
        //                         this.getPagination();
        //                       }
        //              }
        //              else
        //              {
        //               if(event == 'next')
        //                 {
        //                  this.pageObject.page = value+1;
                         
        //                  if(this.pageObject.page==2 || this.pageObject.page >2)
        //                  {
                          
        //                   }else
        //                   {
        //                     this.getPagination();
        //                   }
        //                  }
                 
        //             }
        // }




      
       myFuction(event:any,value: any)
           {
               //console.log(event);
                if(event == 'prev')
                {
                  this.pageObject.page = value- 1;
                  if(this.pageObject.page >-1 && event =='prev' && this.pageObject.totalPage >this.pageObject.page)
                  {
                    this.getPagination();
                    console.log("prev B");
                    
                  }
                 }

               if(event == 'next')
                {
                this.pageObject.page = value+1;
                 
                if(event =='next' && this.pageObject.totalPage >this.pageObject.page)
                {
          
                  this.getPagination();
                  console.log("Next b");
                  
                }else
                {
                 alert("This is last Page !!!");
                }
      
                }
            }



          // myPagination()
          // {
          //   let res=this.addProjectService.getProjectPagination(this.pageNumber, this.pageSize);

          //   res.subscribe((data:any)=>
          //                            {
          //                          console.log(data);
          //                          this.addProjects=data.response.content;
   
          //                             })
          // }



  
updateProject(projectId: number)
{
  this.router.navigate(['updateproject',projectId]);
}
 





public deleteProject(id: number)
{
 
  if(confirm('Are you sure to delete the record ?'))
  {
    //this.addProjectService.deleteProject(id).subscribe(date =>
    this.addProjectService.setIsDeletedTrue(id).subscribe(data=>
    {
      alert("Project Details Updated !!!")
      this.router.navigate(['admin/projectlist']);
    },(erro)=>
      {
        alert("Failed !!!");
      })
   
 

}
}



getProjectDetailsPage(projectId:number)
{
 this.router.navigate(['projectlist/projectdetailspage/', projectId]);
}





//Related to Advance Search Code
SearchValue(projectName:any, clientName: any, projectManager: any, teamLeader:any)
{
console.log("Search box is working ..............");
console.log(projectName);
console.log(clientName);
console.log(projectManager);
console.log(teamLeader);
this.addProjectService.advanceSearch(projectName,clientName,projectManager,teamLeader).subscribe(data=>
  {
    console.log(data);
    this.addProjects=data;
    
  }
)




}








//Related to Search Code
//Global Search
search(keyword: any)
{
  console.log("Printing key value========== in Globale Search");
  console.log(keyword);
  
  
  this.addProjectService.searchRecord(keyword).subscribe(data=>
  {
    console.log(data);
    this.addProjects=data;
    
  })
}


}
