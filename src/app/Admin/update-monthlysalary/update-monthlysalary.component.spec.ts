import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonthlysalaryComponent } from './update-monthlysalary.component';

describe('UpdateMonthlysalaryComponent', () => {
  let component: UpdateMonthlysalaryComponent;
  let fixture: ComponentFixture<UpdateMonthlysalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMonthlysalaryComponent]
    });
    fixture = TestBed.createComponent(UpdateMonthlysalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
