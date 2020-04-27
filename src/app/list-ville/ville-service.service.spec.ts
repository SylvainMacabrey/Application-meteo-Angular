import { TestBed } from '@angular/core/testing';

import { VilleService } from './ville-service.service';

describe('VilleServiceService', () => {
  let service: VilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
