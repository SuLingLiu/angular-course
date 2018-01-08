import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import {StockService} from "./shared/stock.service";
import { Stock2Component } from './stock2/stock2.component';
import {LoggerService} from "./shared/logger.service";
import {AnotherStockService} from "./shared/another-stock.service";

/*
* 依赖注入
* 1.如StockService在此处提供的服务，对所有模块和组件可用相当于全局作用域，声明在组件里的服务只对其本身和子组件有用,如果声明在组件中的提供器跟声明在模块中的用的是同一个tocken，则声明在组件中的会覆盖模块中的。一般把服务声明在模块中，特殊单独处理的才在组件中声明
* 2.如果用的是同一token请参考another-stock和stock2组件
* 服务里可以注入其他服务，@Injectable() 这个表示可以注入其他的服务，也只有加了这个才能注入服务，写了这个则可以在 constructor注入其他的服务，如果没写就不能注入，如注入LoggerService，组件和模块等之所以不用加是因为他们已经自带了
* 3.提供器有以下几种
*
* */

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule
  ],

  //1
  // providers: [StockService, LoggerService],

  //2工厂模式
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

    //3解决工厂传递里new 服务的耦合用deps，是要依赖的服务，通过参数传给工厂
    {provide: StockService, useFactory: (logger: LoggerService, isDev) => {
      if(isDev) {
        return new StockService(logger);
      }else {
        return new AnotherStockService(logger);
      }
    }, deps: [LoggerService, "IS_DEV_ENV"]},
    LoggerService,

    //4.变量的提供器
    // {provide: "IS_DEV_ENV", useValue: false}
    {provide: "IS_DEV_ENV", useValue: {isDev: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
