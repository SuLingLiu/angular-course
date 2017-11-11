import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  message: string;
  /**
   * 注意三点
   *     1. 这两个方法都是视图组装完毕被调用的
   *     2. 组件如果有子组件，只有等子组件的这两个方法被调用了，父组件的才会被调用
   *     3. 不能在这两个方法里更改属性，如果非要更改，可以写在setTimeout里
   * */

  ngAfterViewInit(): void {  //初始化的只会调用一次
    console.log('父组件的视图初始化完毕');
    //this.message = 'Hello';   //这时候在这里改变在模板里用会报错，因为在变更检测周期中，angular是禁止在一个视图在组装好之后，再去更改这个视图，在下面的ngAfterViewChecked也是一样的情况，要解决这个需要把这个放到一个事件循环里
    setTimeout(() => {
      this.message = 'hello';
    }, 0)
  }

  ngAfterViewChecked(): void { //这个调用就会被触发，所以这个要写的非常的精简，以免影响性能
    console.log('父组件的视图变更检测完毕');
  }
  //父组件调用子组件的方法1如下：
  //第二种是：<app-child #child2></app-child><button (click)="child2.greeting('Jerry')">调用child2的greeting方法</button>
  constructor() {}
  @ViewChild('child1')
  child1: ChildComponent;

  ngOnInit(): void {
    /*setInterval(() => {
      this.child1.greeting(('Tom'));
    }, 5000)*/
  }

}
