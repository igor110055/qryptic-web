import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoApiService {

  constructor(private http: HttpClient) {
    
  }

  getCoinsMarkets(currency: string, perPage: number, pageNumber: number) {
    return this.http.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=false`)
  }

  getCoin(name: string) {
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${name}`)
  }

  getExchanges(perPage: number) {
    return this.http.get(`https://api.coingecko.com/api/v3/exchanges?per_page=${perPage}`)
  }
}
