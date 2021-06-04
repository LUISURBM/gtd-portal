import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BasicoService } from './basicos';

describe('BasicoService', () => {
  let service: BasicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BasicoService, HttpClient]
    });
    service = TestBed.inject(BasicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
