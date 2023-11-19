import { Component } from '@angular/core';
import { LeaveEmployee } from '../services/leave';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  panelOpenState = false;
  leaveEmployee: LeaveEmployee=new LeaveEmployee();

}
