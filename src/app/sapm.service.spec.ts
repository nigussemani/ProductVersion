import { TestBed } from '@angular/core/testing';

import { SapmService } from './sapm.service';

describe('SapmService', () => {
  let service: SapmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SapmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
