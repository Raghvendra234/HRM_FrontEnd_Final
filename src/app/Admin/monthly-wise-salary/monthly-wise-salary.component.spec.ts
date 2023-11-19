import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyWiseSalaryComponent } from './monthly-wise-salary.component';

describe('MonthlyWiseSalaryComponent', () => {
  let component: MonthlyWiseSalaryComponent;
  let fixture: ComponentFixture<MonthlyWiseSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyWiseSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyWiseSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
