import { TestBed } from '@angular/core/testing';

import { ArticuloWSService } from './articulo-ws.service';

describe('ArticuloWSService', () => {
  let service: ArticuloWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticuloWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
