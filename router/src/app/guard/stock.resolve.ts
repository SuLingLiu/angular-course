//路由守卫 路由守卫就是拦截器 离开的守卫是可以拿到组件
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Stock } from '../stock/stock.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

//依赖注入，把Router注进来，@Component这个不用写依赖注入，是因为它本身已经注入了
@Injectable()
export class StockResolve implements Resolve<Stock> {
	constructor(private router: Router) {
	}
	resolve(router: ActivatedRouteSnapshot) {

	  //this.routeInfo.snapshot,snapshot它继承的类是ActivatedRouteSnapshot，所以这里直接用就行
		let id = router.params['id'];
		if (id == 1) {
			return new Stock(1, 'IBM');
		} else {
			/*this.router.navigate(['/home']);
			return undefined;*/
			return new Stock(id, '互联网');
		}
	}
}
