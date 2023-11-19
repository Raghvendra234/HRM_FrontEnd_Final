import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveReportEmployeeComponent } from './leave-report-employee.component';

describe('LeaveReportEmployeeComponent', () => {
  let component: LeaveReportEmployeeComponent;
  let fixture: ComponentFixture<LeaveReportEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveReportEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveReportEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
