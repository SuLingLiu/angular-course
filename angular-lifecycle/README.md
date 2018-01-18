# 生命周期
![image](./img/life1.png)

## 生命周期调用顺序
![image](./img/life2.png)

```
import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex:number = 1;

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})
export class LiftComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked, AfterContentChecked, AfterViewInit, AfterContentInit, OnDestroy {

  @Input()
  name: string = 'Tom';
  logIte(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }

  //输入属性在这个方法里是没有被赋值的，如果要用到这个可以在ngOnInit里用
  constructor() {
    this.logIte('name属性在constructor里的值是：'+name);
  }

  //当一个父组件初始化一个或者改变一个子组件的输入属性的时候被调用，如果这个组件没有输入属性，则这个方法永远不会被调用，它的首次调用一定发生在ngOnInit之前
  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'].currentValue;
    this.logIte('name属性在ngOnChanges里的值是：'+name);
  }

  ngOnInit() {
    this.logIte('ngOnInit');
  }

  //用来检测的，在angular每个变更周期中调用的
  ngDoCheck(): void {
    this.logIte('ngDoCheck');
  }

  //下面两个是跟内容投影相关
  ngAfterContentInit(): void {
    this.logIte('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logIte('ngAfterContentChecked');
  }

  //下面跟模板和检查相关
  ngAfterViewInit(): void {
    this.logIte('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logIte('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logIte('ngOnDestroy');
  }

}

```
