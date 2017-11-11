import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  dataSource: Observable<any>;
  stocks = [];
  /*
  * 因服务器不在同一个端口，需要配置代理，新建一个pxoxy.conf.json，并在package.json文件里配置"start": "ng serve --proxy-config proxy.conf.json"，启动命令必须为npm run start，用ng serve不行，angualr会帮助转到对应的服务器
  * */
  constructor(public http: Http) {
    this.dataSource = this.http.get('/api/stock').map(response => response.json());
  }

  ngOnInit() {
    this.dataSource.subscribe(
      data => this.stocks = data
    )
  }

}
