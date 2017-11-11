import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  stockName: string;

  @Input()
  stock: {name: string};

  message: string = '初始化消息';
  oldStockName: string;
  changeDetected: boolean;
  changeCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  //初始化输入属性会调用一次，如果父组件的不可变量如字符串发生了变化，也会调用，如果是父组件的对象可变量发生变化是不会触发ngOnChanges,还有子组件的不可变量发生变化也是不会触发的
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes,null,2))
  }

  //触发事件也会调用，所以如果要对某一个元素做处理，最好判断一下，
  ngDoCheck(): void {
      if(this.stock.name !== this.oldStockName) {
        this.changeDetected = true;
        console.log('DoCheck:stock.name从'+this.oldStockName+'变为'+this.stock.name);
        this.oldStockName = this.stock.name;
      }

      if(this.changeDetected) {
        this.changeCount = 0;
      }else {
        ++this.changeCount;
        console.log('DoCheck:stock.name 没变化时，ngDoCheck方法被调用了'+this.changeCount+'次')
      }

      this.changeDetected = false;
  }


}
