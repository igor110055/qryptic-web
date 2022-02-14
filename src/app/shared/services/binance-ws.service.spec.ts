import { TestBed } from '@angular/core/testing';

import { BinanceWsService } from './binance-ws.service';

describe('BinanceWsService', () => {
  let service: BinanceWsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinanceWsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
