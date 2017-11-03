import { TestBed, inject } from '@angular/core/testing';

import { EmpdataService } from './empdata.service';

describe('EmpdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpdataService]
    });
  });

  it('should be created', inject([EmpdataService], (service: EmpdataService) => {
    expect(service).toBeTruthy();
  }));
});
