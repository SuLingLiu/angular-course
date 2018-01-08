import { Injectable } from '@angular/core';
// import {LoggerService} from "./logger.service";

//@Injectable() 这个表示可以注入其他的服务，写了这个则可以在 constructor注入其他的服务，如果没写就不能注入，如注入LoggerService
@Injectable()
export class StockService {

  constructor() { }
  // constructor(public logger: LoggerService) { }

  getStock(): Stock {

    // this.logger.log('getStock方法被调用');
    return new Stock(1, 'IBM');
  }

}

export class Stock {
	constructor(public id: number, public name: string) {}
}
