import { Component, OnInit } from '@angular/core';

import * as Rx from 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const node = document.querySelector('.test-event');

    // 第二个参数 input 是事件名，对于input元素有一个 oninput 事件用于接受用户输入
    Rx.Observable.fromEvent(node, 'input')
      .map((event: any) => event.target.value)
      .filter(value => value.length >= 2)
      .subscribe(value => { console.log(value); });
  }

}

