import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'cryptocurrencyPrice',
  pure: false
})
export class CryptocurrencyPricePipe implements PipeTransform {
  public price!: Subject<string>;
  pricex!: Observable<string>;

  constructor(
    
  ) {
    
  }

  transform(value: string, ...args: any[]): any {
    return this.cryptocurrencyPrice(value);
  }

  cryptocurrencyPrice(symbol: string): Observable<string> {
    const URL = `wss://fstream.binance.com/ws/${symbol}usdt@markPrice`

    this.price = <Subject<string>>this.binanceWsService
      .connect(URL)
      .pipe(map((response: MessageEvent): string => {
        let data = JSON.parse(response.data);
        return data.p;
      }
    ));

    this.price.subscribe(msg => {
      console.log(symbol + ': ' + msg)
      this.pricex = of(msg);
    })

    return this.pricex;
  }

}
