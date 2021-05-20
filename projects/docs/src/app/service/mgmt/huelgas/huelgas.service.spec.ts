import { TestBed } from '@angular/core/testing';

import { HuelgasService } from './huelgas.service';

describe('HuelgasService', () => {
  let service: HuelgasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuelgasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
