import { TestBed, inject } from '@angular/core/testing';

import { AgricultureService } from './agriculture.service';

describe('AgricultureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgricultureService]
    });
  });

  it('should be created', inject([AgricultureService], (service: AgricultureService) => {
    expect(service).toBeTruthy();
  }));
});
