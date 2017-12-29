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

    //1.处理在查询中传递参数如：<a [routerLink]="['/stock']" [queryParams]="{id: 1}">股票详情</a>
    // this.stockId = this.routeInfo.snapshot.queryParams['id'];


    //2.在路由路径中传递参数如：<a [routerLink]="['/stock', 1]">股票详情</a>
    //注意：如果是同一个组件路由参数不一样，来回切换是不会调用ngOnInit,即写在里代码是不会再次触发，只是路径发生了变化
    //下面是快照模式，如果参数不变的话可以用这个，节约资源，速度更快一些
    //this.stockId = this.routeInfo.snapshot.params['id'];

  	//要想解决2.问题，要想每次参数变了都能变化，可以用下面的订阅，在回调函数里处理
  	//this.routeInfo.params.subscribe((params: Params) => this.stockId = params["id"]);

    //3.在路由配置里去配一个参数如：{path: 'stock/:id', component: StockComponent, data: [{isPro: true}]}
    this.isPro = this.routeInfo.snapshot.data[0]["isPro"];

    //路由守卫里Resolve携带的数据
    this.routeInfo.data.subscribe((data: {stock: Stock}) => {
      this.stock = data.stock;
    })





  }


  isFocus() {
    return this.foucs;
  }

}

export class Stock {
  constructor(public id: number, public name: string) {

  }
}
