import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AddprojectService } from 'src/app/services/addproject.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { SalaryService } from 'src/app/services/salary.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empData:any;
  javaData:any;
  averageData:any;
  projectData:any;

  list:Array<any>=[];
  lists:any;
  myType = 'PieChart';
 
  myData : any
  myData1 : any

  m: any;
  f: any;
  constructor(private employeeService:EmployeeService,private projectService:AddprojectService,
    private salaryService:SalaryService,private router:Router){

  }

 getPieChart(){
  this.myData = [
    ['Java developer', this.ja],
    ['Android Developer', this.andr],
    ['.Net Developer', this.ne],
    ['Data Analytics', this.ana],
    ['Tester', this.lists],
    ['Full stack Developer', this.fu],
    ['Angular Developer', this.an],
    
  ];
 }
//  getPieChart1(){
//   this.myData1 = [
//     ['Xicom', this.Xicom],
//     ['NMS', this.nm],
//     ['CRM', this.cr],
//     ['DIMS', this.dim],
//     ['go to market', this.go],
//     ['CITELUM', this.cim]
//   ];
//  } 


getPieChart1()
{
  this.myData1 =[
  ['Male', this.m],
  ['Female', this.f]
  ];
}

 
 ischart: boolean = false
 check(){
  if(this.lists!=undefined && this.ja!=undefined && this.ne!=undefined && this.an!=undefined && 
    this.ana!=undefined && this.andr!=undefined && this.fu!=undefined){
    // console.log(this.getPieChart(),'fghjkjhgfdgh');
  console.log('test');
  this.ischart = true;
  // this.getPieChart();
  var nums:number[] = [this.lists,this.ja,this.ne,this.an,this.ana,this.andr,this.fu] ;
  console.log(nums,"wrong");
  
  }
  else{
    console.log('HHHHHHHHHHHH');
    
  }
 }

 check1(){
  if(this.m!=undefined && this.f!=undefined){
    // console.log(this.getPieChart(),'fghjkjhgfdgh');
  console.log('test11111111111111111');
  this.ischart = true;
  this.getPieChart1();
  var nums:number[] = [this.m,this.f] ;
  console.log(nums,"wrong");
  }
  else{
    console.log('hhhhhhhhhhhhhh');
  }
 }

//  check1(){
//   if(this.Xicom!=undefined && this.nm!=undefined && this.cr!=undefined && 
//     this.dim!=undefined && this.go!=undefined && this.cim!=undefined){
//     // console.log(this.getPieChart(),'fghjkjhgfdgh');
//   console.log('test');
//   this.ischart = true;
//   this.getPieChart1();
//   var nums:number[] = [this.Xicom,this.nm,this.cr,this.dim,this.go,this.cim] ;
//   console.log(nums,"oh shitttttttttttt");
  
//   }
//   else{
//     var nums:number[] = [this.Xicom,this.nm,this.cr,this.dim,this.go,this.cim] ;
//     console.log(nums,"oh shitttttttttttt");
//     console.log('manisha');
    
//   }
//  }
 
  ngOnInit(): void {
    //setInterval(this.check, 10000);
    let res=this.employeeService.CountEmployee();  
    
    res.subscribe((data)=>
    {
     this.empData=data;

     console.log(this.empData,"ppppppp")
    })

    let res1=this.salaryService.getAverageSalary();
    
    res1.subscribe((data)=>
    {
      this.averageData=data;

      console.log(this.averageData,"average")
    })

    let res2=this.projectService.getProjectCount();
    res2.subscribe((data)=>{
      this.projectData=data;

      console.log(this.projectData,"proData");
    })
  

    this.getTester(this.design);
    this.getJava(this.Java);
    this.getAngular(this.Angular);
    this.getFull(this.Full);
    this.getNet(this.Net)
    this.getAndroid(this.Android);
    this.getAnaytics(this.Analytics);
    // this.getPieChart();
    // this.getXicom(this.xi);
    // this.getNms(this.nms);
    // this.getcims(this.cims);
    // this.getgoto(this.goto);
    // this.getCrm(this.crm);
    // this.getDim(this.dims);
    this.getPieChart();
    this.getPieChart1();
    this.check();
    this.check1();
    this.getPagination();
    this.getMale(this.gen);
    this.getFemale(this.gens);
  
    
    
  }




  gen:String='Male';
  getMale(gen: any)
  {
    let dm=this.employeeService.countGender(gen);
    dm.subscribe((data)=>
    {
      this.m=data.count;
      if(this.m!=null || this.m!=undefined)
      {
        this.getPieChart1();
      }
    })
  }


  gens:String='Female';
  getFemale(gens: any)
  {
    let dm=this.employeeService.countGender(gens);
    dm.subscribe((data)=>
    {
      this.f=data.count;
      if(this.f!=null || this.f!=undefined)
      {
        this.getPieChart1();
      }
    })
  }





  tes:any;  
   design:string = 'Tester'; 

  getTester(design:any){
    let des=this.employeeService.getDesignation(design);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.lists=data.count;
      if(this.lists!=null||this.lists!=undefined){

        this.getPieChart();
      }
    })
  }
  ja:any;
  Java:String='Java Developer';
  getJava(Java:any){
    let Javavd=this.employeeService.getDesignation(Java);

    Javavd.subscribe((data)=>
    {
      console.log(data,"nnnnnnnnnnnnnn");
      this.ja=data.count;
      if(this.ja!=null||this.ja!=undefined){

        this.getPieChart();
      }
      
    })
  }

 an:any;
  Angular:String='Angular Developer';
  getAngular(Angular:any){
    let Angulard=this.employeeService.getDesignation(Angular);

    Angulard.subscribe((data)=>
    {
      console.log(data,"ooooooooooooo");
      this.an=data.count;
      if(this.an!=null||this.an!=undefined){

        this.getPieChart();
      }
    
    })
  }

  fu:any;
  Full:String='Full Stack Developer';
  getFull(Full:any){
    let Fulld=this.employeeService.getDesignation(Full);

    Fulld.subscribe((data)=>
    {
      console.log(data,'qqqqqqqqq');
      this.fu=data.count;
      if(this.fu!=null||this.fu!=undefined){

        this.getPieChart();
      }
      
      
    })
  }

  ne:any;
  Net:String='.Net developer';
  getNet(Net:any){
    let Netd=this.employeeService.getDesignation(Net);

    Netd.subscribe((data)=>{
      console.log(data,'');

      this.ne=data.count;
      if(this.ne!=null||this.ne!=undefined){

        this.getPieChart();
      }
      
    })
  }

  andr:any;
  Android:String='Android Developer';
  getAndroid(Android:any){
    let Androidd=this.employeeService.getDesignation(Android);

    Androidd.subscribe((data)=>{
      console.log(data,'ssssssssssss')
      this.andr=data.count;
      if(this.andr!=null||this.andr!=undefined){

        this.getPieChart();
      }
      
    })
  }

  ana:any;
   Analytics:String='Data Analytics';
   getAnaytics(Analytics:any){
    let Analyticsd=this.employeeService.getDesignation(this.Analytics);

    Analyticsd.subscribe((data)=>{
      console.log(data,'tttttttttt')
      this.ana=data.count;
      if(this.ana!=null||this.ana!=undefined){

        this.getPieChart();
      }
      
      
    })
   }
   

   
   

  
   
   width = 550;
   height = 400;
 


   Xicom:any;  
   xi:string = 'Xicom'; 

  getXicom(xi:any){
    let des=this.projectService.getProjectname(xi);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.Xicom=data.count;
      if(this.Xicom!=null||this.Xicom!=undefined){

        this.getPieChart1();
      }
    })
  }
  openDrop(e:any){
    let r = e.target?.parentElement?.parentElement?.parentElement
    r.classList.toggle('showMenu');
  }
  nm:any;  
   nms:string = 'NMS'; 

  getNms(nms:any){
    let des=this.projectService.getProjectname(nms);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.nm=data.count;
      if(this.nm!=null||this.nm!=undefined){

        this.getPieChart1();
      }
    })
  }

  cr:any;  
  crm:string = 'CRM'; 

  getCrm(crm:any){
    let des=this.projectService.getProjectname(crm);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.cr=data.count;
      if(this.cr!=null||this.cr!=undefined){

        this.getPieChart1();
      }
    })
  }

  go:any;  
   goto:string = 'go to market'; 

  getgoto(goto:any){
    let des=this.projectService.getProjectname(goto);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.go=data.count;
      if(this.go!=null||this.go!=undefined){

        this.getPieChart1();
      }
    })
  }

  dim:any;  
   dims:string = 'DIMS'; 

  getDim(dims:any){
    let des=this.projectService.getProjectname(dims);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.dim=data.count;
      if(this.dim!=null||this.dim!=undefined){

        this.getPieChart1();
      }
    })
  }

  cim:any;  
   cims:string = 'CITELUM'; 

  getcims(cims:any){
    let des=this.projectService.getProjectname(cims);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.cim=data.count;
      if(this.cim!=null||this.cim!=undefined){

        this.getPieChart1();
      }
    })
  }






employeeList :Array<any>=[];
employees:any;

pageObject ={

  page: 0,
  size: 10,
  totalPage:0
}




  
  
    // let resp=this.employeeService.getEmployee();
    //  resp.subscribe((data)=>
    //   {
    //  //   console.log(data);
        
    //     this.employees=data;
    //   });
  
    


    getPagination()
    {
      this.employeeService.getEmployeePagination(this.pageObject.page, this.pageObject.size).subscribe((data:any)=>
      {
        console.log(data);
          this.employees=data.content;
          this.pageObject.page=data.number;
          console.log(this.pageObject.page);
           this.pageObject.totalPage=data.totalPages
      })
    }
    asd(a){
      this.router.navigate(['employeelist/'+a])
    }


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
      
               
                    
     


  public deleteEmployee(id: number)
  {
          
    if(confirm('Are you sure to delete the record ?'))
    {
      this.employeeService.deleteEmployee(id).subscribe(data=>
      {
        this.router.navigate(["admin/employeelist"]);
      },(erro)=>
      {
        alert("Failed !!!");
      })
    }

  }

 

  
  updateEmployee(employeeId:number)
  {
   this.router.navigate(['updateemployee',employeeId]);
   
  }





  getEmployeeById(id:any){

  }


  getDetails(employeeId:number)
  {
   this.router.navigate(['employeelist/detailspage/',employeeId]);
   
  }
  



  // Related Search 

  keywordSearch: any;

  search(keyword: any)
  {
   console.log(keyword);
   this.employeeService.searchData(keyword).subscribe(data=>
    {
      console.log(data);
      this.employees=data;
    })
  }

}























  // this.employeeService.getEmpLIst().subscribe(data =>
  //   {
  //     this.employees = data;
  //   })
  // throw new Error('Method not implemented.');
  //this.getfetchEmpolyee();


// getfetchEmpolyee(){
  //this.employeeService.getEmployee().subscribe({
   //next:(data)=>{
    //  this.employeeList = data;
     // console.log((this.employeeList));
      
   // }
  //})
//}

//}


 