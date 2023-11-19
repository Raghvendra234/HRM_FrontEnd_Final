import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmployeeDetailspageComponent } from './single-employee-detailspage.component';

describe('SingleEmployeeDetailspageComponent', () => {
  let component: SingleEmployeeDetailspageComponent;
  let fixture: ComponentFixture<SingleEmployeeDetailspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleEmployeeDetailspageComponent]
    });
    fixture = TestBed.createComponent(SingleEmployeeDetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
