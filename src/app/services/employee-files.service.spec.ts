import { TestBed } from '@angular/core/testing';

import { EmployeeFilesService } from './employee-files.service';

describe('EmployeeFilesService', () => {
  let service: EmployeeFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
