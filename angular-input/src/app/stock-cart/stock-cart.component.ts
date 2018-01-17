import { Component, OnInit, Input } from '@angular/core';
import {StockInfo} from "../stock-search/stock-search.component";

@Component({
  selector: 'app-stock-cart',
  templateUrl: './stock-cart.component.html',
  styleUrls: ['./stock-cart.component.css']
})
export class StockCartComponent implements OnInit {
  @Input()
  stockInfo: StockInfo;
  constructor() { }

  ngOnInit() {
    this.stockInfo = new StockInfo('',0);//需要赋初始值不然会报错
  }

}
