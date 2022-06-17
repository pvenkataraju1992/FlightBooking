import { TestBed } from '@angular/core/testing';

import { AddinventoryService } from './addinventory.service';

describe('AddinventoryService', () => {
  let service: AddinventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddinventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
