import { Injectable } from '@angular/core';
import {StockService, Stock} from "./stock.service";
import {LoggerService} from "./logger.service";
/*
@Injectable()
export class AnotherStockService {

  constructor() { }

}*/

//因为要实现同一个tocken的注入所以要写成如下,也要有StockService,并把方法和属性也copy过来，StockService如果注入了其他服务，因为是同一个tocken，所以这里也需要注入LoggerService,否则会报错
@Injectable()
export class AnotherStockService implements StockService{
  getStock(): Stock {
      return new Stock(2, "微软");
  }

  constructor(public logger: LoggerService) { }
}
