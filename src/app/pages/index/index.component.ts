import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, Subject, of } from "rxjs";

import { BinanceWsService } from 'src/app/shared/services/binance-ws.service';

import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CoingeckoApiService } from 'src/app/shared/services/coingecko-api.service';

export interface TopCryptoCurrencyPrice {
  name: string,
  price: string,
}

// we need to fetch all cryptocurrencies from binance and get the
// market cap and list descending order - top 8
// https://stackoverflow.com/questions/66132843/is-there-a-way-to-get-the-market-cap-or-market-cap-rank-of-a-coin-using-the-bina 
// do the calculation here ?
const featuredCryptoCurrencies = [
  'stakecubecoin',
  'kryptokrona',
  'lbrycredits',
  'chiliz'
]

@Component({
  selector: 'app-pages-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  breakpoint!: number;
  rowHeight!: string;
  topCryptocurrencies: any;
  topExchanges: any;

  constructor(
    private titleService: Title,
    private binanceWsService: BinanceWsService,
    private coinGeckoService: CoingeckoApiService
  ) {

  }

  ngOnInit(): void {
    this.titleService.setTitle("Qryptic.net - Accelerating crypto for the world")
    this.breakpoint = this.getBreakPoint();
    this.rowHeight = this.getRowHeight();

    // Get top 12 coins
    this.coinGeckoService.getCoinsMarkets('usd', 12, 1).subscribe(response => {
      this.topCryptocurrencies = response;
    });

    // Get top 12 Exchanges
    this.coinGeckoService.getExchanges(12).subscribe(response => {
      this.topExchanges = response;
      console.log(response)
    });
  }

  onResize(event:any) {
    if (event.target.innerWidth < 650) {
      this.breakpoint = 1;
      this.rowHeight = "4:1.5";
    } else if (event.target.innerWidth < 1200) {
      this.breakpoint = 2;
      this.rowHeight = "4:1.5";
    } else if (event.target.innerWidth > 1200) {
      this.breakpoint = 4;
      this.rowHeight = "4:2";
    }
  }

  getBreakPoint(): number {
    var width: number = window.innerWidth;

    if (width > 1200) {
      return 4;
    } else if (width < 650) {
      return 1;
    } else {
      return 2;
    }
  }

  getRowHeight(): string {
    var width: number = window.innerWidth;

    if (width > 1200) {
      return "4:2";
    } else if (width < 1200) {
      return "4:1.5";
    } else {
      return "4:2";
    }
  }

}
