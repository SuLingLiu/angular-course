import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnDestroy {
  //一般会在这个阶段清除一些引用的资源如：反定义一个流，清除定时器
  ngOnDestroy(): void {
    console.log('child2组件被销毁')
  }

  constructor() { }

  ngOnInit() {
  }

}
