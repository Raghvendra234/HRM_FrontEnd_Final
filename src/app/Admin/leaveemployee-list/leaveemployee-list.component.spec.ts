import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveemployeeListComponent } from './leaveemployee-list.component';

describe('LeaveemployeeListComponent', () => {
  let component: LeaveemployeeListComponent;
  let fixture: ComponentFixture<LeaveemployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveemployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveemployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
