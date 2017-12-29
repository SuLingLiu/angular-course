//路由守卫 路由守卫就是拦截器 离开的守卫是可以拿到组件
import { CanDeactivate } from "@angular/router";
import { StockComponent } from '../stock/stock.component';

//CanDeactivate能拿到当前守卫的组件，拿到组件的信息来做一些判断
export class FocusGuard implements CanDeactivate<StockComponent> {
	canDeactivate(component: StockComponent) {
		if(component.isFocus()) {
			return true;
		}else {
			return window.confirm('不关注就离开吗，这股票能赚钱哦！！！！');
		}
	}
}
