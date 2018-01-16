import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import {StockService, Stock} from "../stock.service";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;

  private keyword: string;

  private nameFilter: FormControl = new FormControl();

  constructor(public router: Router, public stockService: StockService) { }

  ngOnInit() {
    this.stocks =  this.stockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

}

