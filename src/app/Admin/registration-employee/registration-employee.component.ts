import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Address,Employee,Qualification } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Route, Router } from '@angular/router';
import { RegistrationEmployeeModule } from './registration-employee.module';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration-employee',
  templateUrl: './registration-employee.component.html',
  styleUrls: ['./registration-employee.component.css']
})
export class RegistrationEmployeeComponent implements OnInit 
{
 
  selectedOption: string;
  employeeData: any;
   //checked:boolean;
   show:any;
  employee: Employee = new Employee();
  employeeId: Employee=new Employee();
  employeeError:Employee;
  private isCreated:boolean=false;

  private employeeExist:boolean=false;
  alert:boolean=false;
  

   perAddress: Address = new Address();
   curAddress: Address = new Address();
 
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

 
  
  constructor(private employeeService: EmployeeService,
              private router: Router,
              private fb:FormBuilder,
              private toast:NgToastService,
              private snack: MatSnackBar) 
              {
                this.selectedOption = 'Fresher';
                console.log("insisde add emp");
                this.experienceForm =this.fb.group({
                  "temArr" : new FormArray([])
                
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
                 
                   quantities: this.fb.array([]) ,
                });
                }


 ngOnInit() 
 {
  this.selectedOption = 'Fresher';
  console.log(this.employeeForm)
  }

 
  formSubmit() 
 {  
  

  //Validation client Side
  if(this.employeeForm.value.firstName.trim()=='' ||this.employeeForm.value.firstName==null)
  {
    this.snack.open("Firstname should be min 2 characters !!",'',{
      duration:3000,
     });
     return;
  }

  if(this.employeeForm.value.lastName.trim()=='' ||this.employeeForm.value.lastName==null)
  {
    this.snack.open("Lastname is required !!",'',{
      duration:3000,
     });
     return;
  }

  if(this.employeeForm.value.emailId.trim()=='' ||this.employeeForm.value.emailId==null)
  {
    this.snack.open("Email_id is required !!",'',{
      duration:3000,
     });
     return;
  }

  if(this.employeeForm.value.contact=='' || this.employeeForm.value.contact==null)
  {
    this.snack.open("Phone number is required and also should be 10 digits !!",'',{
      duration:3000,
     });
     return;
  }

  if(this.employeeForm.value.aadharCard.trim()=='' || this.employeeForm.value.aadharCard==null)
  {
    this.snack.open("Aadhar number is required and also should be 12 digits !!",'',{
      duration:3000,
     });
     return;
  }

  if(this.employeeForm.value.panCard.trim()=='' || this.employeeForm.value.panCard==null)
  {
    this.snack.open("PanCard number is required and also should be 10 digits !!",'',{
      duration:3000,
     });
     return;
  }


  if(this.employeeForm.value.dateOfBirth.trim()=='' ||this.employeeForm.value.dateOfBirth==null)
  {
    this.snack.open("Date_of_birth is required !!",'',{
      duration:3000,
     });
     return;
  }

  if(this.employeeForm.value.gender.trim()=='' ||this.employeeForm.value.gender==null)
  {
    this.snack.open("Gender is required !!",'',{
      duration:3000,
     });
     return;
  }

  if(this.employeeForm.value.password.trim()=='' ||this.employeeForm.value.password==null)
  {
    this.snack.open("Password is required !!",'',{
      duration:3000,
     });
     return;
  }

  if(this.employeeForm.value.designation.trim()=='' ||this.employeeForm.value.designation==null)
  {
    this.snack.open("Designation is required !!",'',{
      duration:3000,
     });
     return;
  }

 
  if(this.employeeForm.value.designation.trim()=='' ||this.employeeForm.value.designation==null)
  {
    this.snack.open("Designation is required !!",'',{
      duration:3000,
     });
     return;
  }




  if(this.employeeForm.value.bankName.trim()=='' ||this.employeeForm.value.bankName==null)
  {
    this.snack.open("Bankname is required !!",'',{
      duration:3000,
     });
     return;
  }


  if(this.employeeForm.value.accountNumber.trim()=='' ||this.employeeForm.value.accountNumber==null)
  {
    this.snack.open("Account Number is required !!",'',{
      duration:3000,
     });
     return;
  }


  if(this.employeeForm.value.cifNumber.trim()=='' ||this.employeeForm.value.cifNumber==null)
  {
    this.snack.open("IFCS Code is required !!",'',{
      duration:3000,
     });
     return;
  }

  //Address validation

  // if(this.employeeForm.value.houseNumber.trim()=='' ||this.employeeForm.value.houseNumber==null)
  // {
  //   this.snack.open("House Number is required !!",'',{
  //     duration:3000,
  //    });
  //    return;
  // }

  // if(this.employeeForm.value.city.trim()=='' ||this.employeeForm.value.city==null)
  // {
  //   this.snack.open("City is required !!",'',{
  //     duration:3000,
  //    });
  //    return;
  // }


  // if(this.employeeForm.value.pinCode.trim()=='' ||this.employeeForm.value.pinCode==null)
  // {
  //   this.snack.open("PinCode is required !!",'',{
  //     duration:3000,
  //    });
  //    return;
  // }

  // if(this.employeeForm.value.state.trim()=='' ||this.employeeForm.value.state==null)
  // {
  //   this.snack.open("State is required !!",'',{
  //     duration:3000,
  //    });
  //    return;
  // }



// Qualification

  // if(this.bechelorQualificationForm.value.board.trim()=='' || this.bechelorQualificationForm.value.board==null)
  // {
  //   this.snack.open("Board is required !!",'',{
  //     duration:3000,
  //    });
  //    return;
  // }

  
    console.log(this.employeeForm)

  // this.employeeForm.addControl("address",this.peraddressForm);
    this.employeeService.addEmployees(this.employeeForm.value).subscribe(data =>  {
      this.employee=new Employee();
      this.isCreated=true;
      this.employeeExist=false;
      this.employeeError=new Employee();
      
      alert('Saved !!!');

      
      //this.alert=true;
      
      this.toast.success({detail: "registration", summary: "Employee added successfully !!!", duration: 1000})
      
     this.router.navigate(["admin/employeelist"]);
    }, error => {
 
      this.employeeError=error.error;
      this.isCreated=false;
      if(error.status==400 || error.status==500){
        this.isCreated=false;
        this.employeeExist=true;

      }
      console.log(error);
      
        this.EError=error.error.message;
     //  alert(error.error.message);
     this.toast.error({detail: "failed...!", summary: error.error.message, duration: 10000})

      //this.alert=error.error.message
    } )
    
  }





  closeAlert(){
    this.alert=false;
  }



  EError:any;
  validate()
  {
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



  setValue()
  {
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
  quantities() : FormArray {
    return this.employeeForm.get("quantities") as FormArray
   }

   
  addMoreEmployee() 
  {
   
    this.myFormArray.push(this.fb.group({
      experience:[''],
      previousCompanydesignations:[''],   
       previousCompanyName:[''],
    }));
  }
   
  removeEmployee(i:number) {
    this.myFormArray.removeAt(i);
  }
   
  onSubmit() {
    console.log(this.experienceForm.value);

 }

}

