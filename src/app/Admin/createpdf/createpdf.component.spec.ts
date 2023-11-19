import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepdfComponent } from './createpdf.component';

describe('CreatepdfComponent', () => {
  let component: CreatepdfComponent;
  let fixture: ComponentFixture<CreatepdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
