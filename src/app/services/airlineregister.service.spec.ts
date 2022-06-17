import { TestBed } from '@angular/core/testing';

import { AirlineregisterService } from './airlineregister.service';

describe('AirlineregisterService', () => {
  let service: AirlineregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlineregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
