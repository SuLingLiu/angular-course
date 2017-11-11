import { TestBed, inject } from '@angular/core/testing';

import { AnotherStockService } from './another-stock.service';

describe('AnotherStockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherStockService]
    });
  });

  it('should be created', inject([AnotherStockService], (service: AnotherStockService) => {
    expect(service).toBeTruthy();
  }));
});
