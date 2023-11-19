import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Profile } from 'src/app/services/profile';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-createpdf',
  templateUrl: './createpdf.component.html',
  styleUrls: ['./createpdf.component.css']
})
export class CreatepdfComponent
 {


  profile: Profile;

  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open();    
      break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); 
      break;
      case 'download':     
      pdfMake.createPdf(documentDefinition).download(); 
      break;
      default: pdfMake.createPdf(documentDefinition).open(); 
      break;
    }
 }


 getDocumentDefinition() {
  return {
    content: [
    {
      text: 'PROFILE',
      bold: true,
      fontSize: 20,
      alignment: 'center',
      margin: [0, 0, 0, 20]
    },
    {
    columns: [
      [{
        text: 'Firstname : ' + this.profile.firstname
      },
      {
        text: 'Lastname : ' + this.profile.lastname
      },
      {
        text: 'Username : ' + this.profile.username
      },
      {
        text: 'Email : ' + this.profile.email
      }] 
     ]
    }],
    styles: {
      name: {
        fontSize: 16,
        bold: true
    }
  }
};
 } 

 onSubmit() 
 {

      this.profile = {
      firstname: "Raghav" ,
      lastname:  "yadav",
      username:  "abc",
      email:     "abc@gmail.com"
    };
    this.generatePdf("download");
  }
}
 


  
  
