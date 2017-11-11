import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello word';
  stockName: string = 'Hello';
  stock: {name: string} = {name: 'Tom'};

  constructor() {
    /*//在js中，字符串是不可变的，赋值只是指向的内存地址发生了变化，
    var greeting = 'Hello';
    greeting = 'Hello world';

    //在js中，对象是可变的, user.name指向了一个新地址，但是user还是不变的
    var user = {name: 'Tom'};
    user.name = 'Jerry';*/

  }
}
