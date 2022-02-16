import { TestBed } from '@angular/core/testing';

import { CoingeckoApiService } from './coingecko-api.service';

describe('CoingeckoApiService', () => {
  let service: CoingeckoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoingeckoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
