import { TestBed } from '@angular/core/testing';

import { PracitionerService } from './pracitioner.service';

describe('PracitionerService', () => {
  let service: PracitionerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracitionerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
