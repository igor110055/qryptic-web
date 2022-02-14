import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { BinanceWsService } from 'src/app/shared/services/binance-ws.service';

const CHAT_URL = 'wss://fstream.binance.com/ws/btcusdt@markPrice'
export interface Price {
  p: string;
}

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
  price!: string;
  
  public prices: Subject<Price>;

  constructor(
    private titleService: Title,
    private binanceWsService: BinanceWsService
  ) {
    this.prices = <Subject<Price>>binanceWsService
      .connect(CHAT_URL)
      .pipe(map((response: MessageEvent): Price => {
        let data = JSON.parse(response.data);
        return {
          p: data.p,
        };
      }
    ));


    this.prices.subscribe(msg => {
      console.log(msg)
      this.price = msg.p;
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle("Qryptic.net - Accelerating crypto for the world")
    this.breakpoint = this.getBreakPoint();
    this.rowHeight = this.getRowHeight();

    // const subject = webSocket('wss://fstream.binance.com/ws/btcusdt@markPrice');

    // subject.subscribe({
    //   next: (v) => this.data = v,
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete') 
    // })

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
