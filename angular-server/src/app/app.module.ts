import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import {StockService} from "./shared/stock.service";
import { Stock2Component } from './stock2/stock2.component';
import {LoggerService} from "./shared/logger.service";
import {AnotherStockService} from "./shared/another-stock.service";



@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule
  ],
  //StockService在此处提供的服务，对所有模块和组件可用相当于全局作用域，声明在组件里的服务只对其本身和子组件有用,如果声明在组件中的提供器跟声明在模块中的用的是同一个tocken，则声明在组件中的会覆盖模块中的。一般把服务声明在模块中，特殊单独处理的才在组件中声明
  // providers: [StockService, LoggerService],
  providers: [
    //这个是单例模式，只会被调一次，不管在那用
    /*{provide: StockService, useFactory: () => {
      let logger = new LoggerService();//为了减少耦合
      let dev = Math.random() > 0.5;   //变量也可注入
      if(dev) {
        return new StockService(logger);
      }else {
        return new AnotherStockService(logger);
      }
    }},*/

    {provide: StockService, useFactory: (logger: LoggerService, isDev) => {
      if(isDev) {
        return new StockService(logger);
      }else {
        return new AnotherStockService(logger);
      }
    }, deps: [LoggerService, "IS_DEV_ENV"]},
    LoggerService,
    // {provide: "IS_DEV_ENV", useValue: false}
    {provide: "IS_DEV_ENV", useValue: {isDev: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
