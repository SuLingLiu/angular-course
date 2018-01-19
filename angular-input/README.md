## 学习内容
- 组件的输入输出属性
- 使用中间人模式传递数据

## 组件的输入属性
1. 一定要注意在输入属性的前面加 @Input()装饰器
2. 输入属性时改变是单向的，父组件输入属性的改变会影响子组件，子组的对应的值改变，不会影响组件
3. 传递参数只能由输入属性和路由参数里传递


```
//================ 父组件
//模板
<input type="text" placeholder="请输入搜索关键字" [(ngModel)]="search">
<app-stock-search [keyWord]="search"></app-stock-search>

//组件
private search: string;

//=============== 子组件
//模板
<div>我是子组件</div>
<div>
  要搜索的股票关键字是 {{keyWord}}
</div>

//组件
import { Component, OnInit, Input  } from '@angular/core';
//1.输入属性前必须加@Input装饰器，只能由父组件传给子组件
@Input()
private keyWord: string;   //2.这是单向的，父组件的值改变，可以影响子组件，子组件的改变不会影响父组件

ngOnInit() {
    //2.1、此处用于验证子组件值的改变不影响父组件的值。
    setTimeout(() => this.keyWord = 'xxx', 2000);
}

```

## 输出属性

```
//========= 父组件
//模板 $event是传递的参数
<app-stock-search [keyWord]="search" (searchResult)="searchResultHandler($event)"></app-stock-search>

//组件
 searchResultHandler(stockInfo: StockInfo) {
    this.stockInfo = stockInfo;
 }
 
//======== 子组件
//组件
import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

 //Output()表示searchResult是一个输出属性，子组件传给父组件， EventEmitter需要传一个类型，输出的是一个类型
  //父组件事件的名字，也可以通过在  @Output('lastprice');父组件也写这个事件名，而不是写 searchResult
@Output()
  searchResult: EventEmitter<StockInfo> = new EventEmitter();
  constructor() { }
  
setInterval(() => {
  let stockInfo: StockInfo = new StockInfo(this.keyWord,100*Math.random());
  this.price = stockInfo.price;
  this.searchResult.emit(stockInfo);//把股票信息发射出去，需要在父组件里捕获事件
}, 2000)
```

## 组件间通信
1. 有共同父组件
2. 如果没有共同父组件，可以采用服务注入来解决通信的问题，一个组件来通过服务发射事件，一个组件通过服务订阅事件


```
//======= 父组件
//模板
<div>我是父组件</div>

<div>
  <input type="text" placeholder="请输入搜索关键字" [(ngModel)]="search">
</div>

<app-stock-search [keyWord]="search"></app-stock-search>
<app-stock-cart  [stockInfo]="stockInfo"></app-stock-cart>

//组件
private search: string;
private stockInfo:StockInfo;

addCardHandler(stockInfo: StockInfo) {
    this.stockInfo = stockInfo;
}

//======= 兄弟组件1
//模板
<div>我是子组件</div>
<div>
  要搜索的股票关键字是 {{keyWord}}，当前价格是{{price | number : '2.2-2'}}
  <button (click)="buyStock()">购买</button>
</div>

//组件
import { Component, OnInit, Input,EventEmitter, Output  } from '@angular/core';

export class StockSearchComponent implements OnInit {
  //1.输入属性前必须加@Input装饰器，只能由父组件传给子组件
  @Input()
  private keyWord: string;   
  private price: number;
  
  @Output()
  addCard: EventEmitter<StockInfo> = new EventEmitter();
  constructor() { }

  ngOnInit() {

    setInterval(() => {
      let stockInfo: StockInfo = new StockInfo(this.keyWord,100*Math.random());
      this.price = stockInfo.price;
    }, 2000)
  }

  buyStock() {
    this.addCard.emit(new StockInfo(this.keyWord, this.price));
  }

}

export class StockInfo {
  constructor(public name: string, public price: number) {}
}

//========= 兄弟组件2
//模板
<div>我是购物车</div>
<div>要购买的股票是{{stockInfo.name}},购买的价格是{{stockInfo.price}}</div>

//组件
import { Component, OnInit, Input } from '@angular/core';
export class StockCartComponent implements OnInit {
  @Input()
  stockInfo: StockInfo;
  constructor() { }

  ngOnInit() {
    this.stockInfo = new StockInfo('',0);//需要赋初始值不然会报错
  }

}

```
## 自定义双向数据绑定

```
//父组件模调用
<app-stars [(rating)]="stock.rating" [readonly]="false"></app-stars>

//子组件模板
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Input()
rating: number = 0;

//ratingChange 输入属性写rating，输出写ratingChange就能组成自定义的双向数据绑定
@Output()
ratingChange: EventEmitter<number> = new EventEmitter();
```
