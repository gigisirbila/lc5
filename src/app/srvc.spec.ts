import { TestBed } from '@angular/core/testing';

import { Srvc } from './srvc';

describe('Srvc', () => {
  let service: Srvc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Srvc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
