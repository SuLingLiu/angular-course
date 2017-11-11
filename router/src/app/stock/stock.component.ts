import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
	private stockId: number;

  private stock: Stock;//如果这只是ajax请求过来的数据，一开始没值，会报错，所以用路由守卫里的Resolve来提交获取数据

  private isPro: boolean;
	private foucs: boolean = false;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
  	//如果多次连续调用这个，只有第一次会触发,所以要想每次参数变了都能变化，可以用下面的订阅，在回调函数里处理
  	//this.routeInfo.params.subscribe((params: Params) => this.stockId = params["id"]);
    this.routeInfo.data.subscribe((data: {stock: Stock}) => {
      this.stock = data.stock;
    })
  	this.isPro = this.routeInfo.snapshot.data[0]["isPro"];
  	//下面是快照模式，如果参数不变的话可以用这个，节约资源，速度更快一些
  	// this.stockId = this.routeInfo.snapshot.queryParams['id'];
  	//this.stockId = this.routeInfo.snapshot.params['id'];

  }

  isFocus() {
    return this.foucs;
  }

}

export class Stock {
  constructor(public id: number, public name: string) {

  }
}
