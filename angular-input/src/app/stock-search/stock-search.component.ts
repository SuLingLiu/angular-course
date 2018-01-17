import { Component, OnInit, Input,EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {
  //1.输入属性前必须加@Input装饰器，只能由父组件传给子组件
  @Input()
  private keyWord: string;   //2.这是单向的，父组件的值改变，可以影响子组件，子组件的改变不会影响父组件
  private price: number;

  //Output()表示searchResult是一个输出属性，子组件传给父组件， EventEmitter需要传一个类型，输出的是一个类型
  //父组件事件的名字，也可以通过在  @Output('lastprice');父组件也写这个事件名，而不是写 searchResult
  /*@Output()
  searchResult: EventEmitter<StockInfo>  = new EventEmitter();*/

  @Output()
  addCard: EventEmitter<StockInfo> = new EventEmitter();
  constructor() { }

  ngOnInit() {

    //2.1、此处用于验证子组件值的改变不影响父组件的值。
    // setTimeout(() => this.keyWord = 'xxx', 2000);

    setInterval(() => {
      let stockInfo: StockInfo = new StockInfo(this.keyWord,100*Math.random());
      this.price = stockInfo.price;
     // this.searchResult.emit(stockInfo);//把股票信息发射出去，需要在父组件里捕获事件
    }, 2000)
  }

  buyStock() {

    this.addCard.emit(new StockInfo(this.keyWord, this.price));
  }

}

export class StockInfo {
  constructor(public name: string, public price: number) {}
}
