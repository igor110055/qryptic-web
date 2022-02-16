import { CryptocurrencyPricePipe } from './cryptocurrency-price.pipe';

describe('CryptocurrencyPricePipe', () => {
  it('create an instance', () => {
    const pipe = new CryptocurrencyPricePipe();
    expect(pipe).toBeTruthy();
  });
});
