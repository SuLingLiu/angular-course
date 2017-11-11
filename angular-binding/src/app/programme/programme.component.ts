import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  //FormControl每个表单都会有这个
  searchInput:FormControl = new FormControl();
  constructor() {
    /*Observable.from([1,2,3,4]) //被观察者
      .filter(e => e%2 == 0)
      .map(e => e*e)
      .subscribe(   //观察者，后两个是可选的
        e => console.log(e),
        err => console.error(err),
        () => console.log('结束了')
      )*/

    this.searchInput.valueChanges
      .debounceTime(500) //debounceTime需要引用rxjs/Rx 每隔500毫秒提交一次
      .subscribe(stockCode => this.getStockInfo(stockCode));
  }

  ngOnInit() {
  }

  onkey(value:string) {
      // console.log(event.target.value);
    console.log(value)
  }

  getStockInfo(value:string) {
    console.log(value);
  }

}
