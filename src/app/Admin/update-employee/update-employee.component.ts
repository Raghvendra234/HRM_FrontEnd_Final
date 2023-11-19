import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address,Employee,Qualification } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit
 {

 // address:Array<Address> = [];
  //curAddressList :Array<any>=[];
  // employeeId: number;
  // id: number;

  
  // employee: Employee = new Employee();
 
  // address: Address=new Address();
  // perAddress: Address = new Address();
  // curAddress: Address=new Address();

  //  qualification10: Qualification=new Qualification();
  //  qualification12: Qualification=new Qualification();
  //  qualificationBachelor: Qualification=new Qualification();
  //  qualificationMaster: Qualification=new Qualification();

   

  // constructor(private employeeService: EmployeeService,
  //             private router: Router,
  //             private  route: ActivatedRoute)
  //              {
  //               this.route.params.subscribe(parm=>
  //                 {
  //                 console.log(parm);
  //                 this.employeeId=parm['id']
                  
  //               })
  //              }


  // ngOnInit(): void 
  // {
  //     console.log(this.route.snapshot.params);
       

  //   this.employeeService.getEmployeeById(this.employeeId).subscribe(data =>
  //     {
        
  //       this.employee =data;
  //       this.perAddress = data.address[0];
  //       this.curAddress = data.address[1];
  //       this.qualification10 = data.qualification[0];
  //       this.qualification12 = data.qualification[1];
  //       this.qualificationBachelor = data.qualification[2];
  //       this.qualificationMaster = data.qualification[3];
        


      
  //     }, error => console.log(error));
  // }
   

  // updateEmployee()
  // {

  // }
  

  // formSubmit() 
  // {
  //   // console.log(this.employee);
  //   console.log(this.perAddress);
    
  //   this.employee.address.push(this.perAddress);
  //   this.employee.address.push(this.curAddress);

  //   this.employee.qualification.push(this.qualification10);
  //   this.employee.qualification.push(this.qualification12);
  //   this.employee.qualification.push(this.qualificationBachelor);
  //   this.employee.qualification.push(this.qualificationMaster);

  //   console.log( this.employee);
    
  //    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe((data) =>
  //     {
  //     console.log(data);

  //     alert('Updated !!!');
  //     console.log("SAVE----" + data);
  //     this.router.navigate(['employeelist']);

  //   }, (error) => {
  //     console.log(error);
  //     alert(error);
  //     alert("Failed !!!");
  //   }



  //   )
  // }



  employeeData: any;
  //checked:boolean;
 employee: Employee = new Employee();
 employeeId: number;
 employeeError:Employee;
 private isCreated:boolean=false;

 private employeeExist:boolean=false;
 alert:boolean=false;
 

  perAddress: Address = new Address();
  curAddress: Address = new Address();
  dataForm: any;


 qualification10: Qualification=new Qualification();
 qualification12: Qualification=new Qualification();
 qualificationBachelor: Qualification=new Qualification();
 qualificationMaster: Qualification=new Qualification();


 curraddressForm:FormGroup;
 peraddressForm:FormGroup
 masterQualificationForm:FormGroup;
 bechelorQualificationForm:FormGroup;
 twelthQualificationForm:FormGroup;
 tenthmasterQualificationForm:FormGroup;
 experienceForm:FormGroup;
 totalExperience: any;
 fresher: any;
 experienceFormTemp:FormGroup;
 addEmployeeForm:FormGroup;


 
 constructor(private employeeService: EmployeeService,
  
              private router: Router,private fb:FormBuilder, private route: ActivatedRoute) {
                this.route.params.subscribe(parm=>
                                  {
                                   console.log(parm);
                                   this.employeeId=parm['id']
                                  
                                  })
                               
     
              this.addEmployeeForm=this.fb.group( {
                  experience:[''],
                  PreviousCompanydesignations:[''],
                   previousCompanyName:[''],
              
              }) 
               this.curraddressForm= this.fb.group({
                 pinCode:[''],
                 houseNumber:[''],
                 city:[''],
                state:[''],
                typeOfAddress:new FormControl('current'),
               }),
               this.peraddressForm = this.fb.group({
                 pinCode:[''],
                 houseNumber:[''],
                 city:[''],
                state:[''],
                typeOfAddress:new FormControl('parmanent'),
               }),
               this.masterQualificationForm = this.fb.group({
                 course:[''],
                 board: [''],
                 passingyear:[''],
                 percentage:[''],
                 status:[''],
               }),
               this.bechelorQualificationForm = this.fb.group({
                 course:[''],
                 board: [''],
                 passingyear:[''],
                 percentage:[''],
                 status:[''],
               }),
               this.twelthQualificationForm  = this.fb.group({
                 course:[''],
                 board: [''],
                 passingyear:[''],
                 percentage:[''],
                 status:[''],
               }),
               this.tenthmasterQualificationForm = this.fb.group({
                 course:[''],
                 board: [''],
                 passingyear:[''],
                 percentage:[''],
                 status:[''],
               }),


               this.experienceForm = this.fb.group({
                experience:[],
                experienceId:[],
                previousCompanyName:[],
                previousCompanydesignations:[]
      
               })
           
           
                 this.employeeForm = this.fb.group({  
                 firstName:new FormControl(''),
                 lastName:new FormControl(''),
                 contact:new FormControl(''),
                 emailId:new FormControl(''),
                 aadharCard:new FormControl(''),
                 panCard:new FormControl(''),
                 bankName:new FormControl(''),
                 accountNumber:new FormControl(''),
                 cifNumber:new FormControl(''),
                 toatalExperience:new FormControl(''),
                
                 designation:new FormControl(''),
                 password:new FormControl(''),
                 gender:new FormControl(''),
                 dateOfBirth:new FormControl(''),                     
                     
                    name:new FormControl(''),
                    imageType: new FormControl(''),
                    imageData:new FormControl(''),

                 address:new FormArray( [this.peraddressForm,this.curraddressForm]),
                 qualification:new FormArray([this.masterQualificationForm,this.bechelorQualificationForm,this.twelthQualificationForm,this.tenthmasterQualificationForm]),
                 employeeExperiences:new FormArray([]),
                
               });
               }





ngOnInit() 
{
    this.employeeService.getEmployeeById(this.employeeId).subscribe((data)=>{
    this.dataForm=data;
    this.employeeForm.patchValue(this.dataForm)

  //   this.dataForm.employeeExperiences.map(m=>{

  //     this.experienceArray.push(
  //     this.fb.group({
  //       'experience':[m.experience],
  //       'experienceId':[m.experienceId],
  //       'previousCompanyName':[m.previousCompanyName],
  //       'previousCompanydesignations':[m.previousCompanydesignations]
  //     })
  //   )
  // })
   console.log(this.employeeForm.value);
   console.log(this.dataForm.employeeExperiences)
  },(error)=>
  {
    console.log(error);
  })
 }




get experienceArray(){
 return this.employeeForm.get('employeeExperiences') as FormArray;
}


 formSubmit(){
    this.employeeService.updateEmployee(this.employeeId, this.employeeForm.value).subscribe((data)=>
    {
       console.log(data);
       alert("Success");
       this.router.navigate(['admin/projectlist']);
    },(error)=>
    {
      alert("failed !!!");
    })
  }
 closeAlert(){
   this.alert=false;
 }
 EError:any;
 validate(){
   var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
   if (form.checkValidity() === false) {
     event.preventDefault();
     event.stopPropagation();
   }
   form.classList.add('was-validated');
 } 

 
  
 //  house:any=this.perAddress.houseNumber;
 //  city:any=this.perAddress.city;
 //  pincode:any=this.perAddress.pinCode;
 //  state:any=this.perAddress.state;

 check:boolean=false;
 curhouse:any;
 curcity:any;
 curpincode:any;
 asd=false;
 curstate:any;
 houseNumber:string="";
 city:string="";
 state:string="";
 pinCode:string="";

 setValue() {
    // input value retrieved
    if(this.check==true){
     this.check=false
     
   }
   else{
     this.check=true
     console.log("true");
     console.log(this.peraddressForm.value.houseNumber,"sdfghjhgfdsfg");

     
   }

    
    if(this.check==true){
   this.houseNumber=this.curraddressForm.get('houseNumber')?.value; 
   this.city=this.curraddressForm.get('city')?.value;
   this.state=this.curraddressForm.get('state')?.value;
   this.pinCode=this.curraddressForm.get('pinCode')?.value;
   this.peraddressForm.controls["houseNumber"].setValue(this.houseNumber);
   this.peraddressForm.controls["city"].setValue(this.city);
   this.peraddressForm.controls["state"].setValue(this.state);
   this.peraddressForm.controls["pinCode"].setValue(this.pinCode);
    }
    else{
     this.peraddressForm.controls["houseNumber"].setValue('');
   this.peraddressForm.controls["city"].setValue('');
   this.peraddressForm.controls["state"].setValue('');
   this.peraddressForm.controls["pinCode"].setValue('');
    }

    
 }

 sameAs(){
   if(this.check==true){
     this.check=false
     console.log("false");
     console.log(this.curraddressForm.value.houseNumber,"manisha");

     
   }
   else{
     this.check=true
     console.log("true");
     console.log(this.peraddressForm.value.houseNumber,"sdfghjhgfdsfg");

     
   }

    
    if(this.check==true){
     
     this.curraddressForm.value.houseNumber = this.peraddressForm.value.houseNumber
     this.curraddressForm.value.city=this.peraddressForm.value.city;
     this.curraddressForm.value.pinCode=this.peraddressForm.value.pinCode;
     this.curraddressForm.value.state=this.peraddressForm.value.state;
    // this.curraddressForm=this.peraddressForm 

    }
    else{
     console.log("ts");
    // this.curraddressForm='';

    this.peraddressForm.value.houseNumber="";
    this.peraddressForm.value.city="";
    this.peraddressForm.value.pincode="";
    this.peraddressForm.value.state="";
   }
 // }
}
name = 'Angular';

 employeeForm: FormGroup;
  
get myFormArray(){
 return this.employeeForm.get('employeeExperiences') as FormArray;
}


  
 addMoreEmployee() {
  
  return this.myFormArray.push(this.fb.group({
     experience:[''],
     PreviousCompanydesignations:[''],
      previousCompanyName:[''],
   }));
 }
  

 removeEmployee(i:number) 
 {
   this.myFormArray.removeAt(i);
 }
  
 onSubmit() {
   console.log(this.experienceForm.value);

 }




}
