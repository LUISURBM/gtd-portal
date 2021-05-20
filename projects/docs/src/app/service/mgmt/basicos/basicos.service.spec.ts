import { TestBed } from '@angular/core/testing';

import { BasicoService } from './basicos';

describe('BasicoService', () => {
  let service: BasicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
