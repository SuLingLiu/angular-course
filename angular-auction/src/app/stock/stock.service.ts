import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  constructor() {}

  private stocks: Stock[] = [
    new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票，是我在学习angular创建的', ['IT', '互联网']),
    new Stock(2, '第二只股票', 2.9, 3.6, '这是第二只股票，是我在学习angular创建的', ['IT', 'JS']),
    new Stock(3, '第三只股票', 3.9, 2, '这是第三只股票，是我在学习angular创建的', ['JS', 'CSS']),
    new Stock(4, '第四只股票', 4.3, 0, '这是第四只股票，是我在学习angular创建的', ['IT', 'web']),
    new Stock(5, '第五只股票', 5, 1, '这是第五只股票，是我在学习angular创建的', ['IT', '硬件']),
    new Stock(6, '第六只股票', 3.44, 5, '这是第六只股票，是我在学习angular创建的', ['IT', 'IOS']),
    new Stock(7, '第七只股票', 4, 4, '这是第七只股票，是我在学习angular创建的', ['安卓', '互联网'])
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number):Stock {
    let stock = this.stocks.find( stock => stock.id == id);
    if(!stock) {
      stock = new Stock(0, '', 0, 0, '', []);
    }
    return stock;
  }
}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
