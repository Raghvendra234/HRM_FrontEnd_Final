import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyWiseSalaryListComponent } from './monthly-wise-salary-list.component';

describe('MonthlyWiseSalaryListComponent', () => {
  let component: MonthlyWiseSalaryListComponent;
  let fixture: ComponentFixture<MonthlyWiseSalaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyWiseSalaryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyWiseSalaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
