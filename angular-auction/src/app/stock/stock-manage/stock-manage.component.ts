import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;

  constructor(public router: Router) { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票，是我在学习angular创建的', ['IT', '互联网']),
      new Stock(2, '第二只股票', 2.9, 3.6, '这是第二只股票，是我在学习angular创建的', ['IT', 'JS']),
      new Stock(3, '第三只股票', 3.9, 2, '这是第三只股票，是我在学习angular创建的', ['JS', 'CSS']),
      new Stock(4, '第四只股票', 4.3, 0, '这是第四只股票，是我在学习angular创建的', ['IT', 'web']),
      new Stock(5, '第五只股票', 5, 1, '这是第五只股票，是我在学习angular创建的', ['IT', '硬件']),
      new Stock(6, '第六只股票', 3.44, 5, '这是第六只股票，是我在学习angular创建的', ['IT', 'IOS']),
      new Stock(7, '第七只股票', 4, 4, '这是第七只股票，是我在学习angular创建的', ['安卓', '互联网'])
    ];
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
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
