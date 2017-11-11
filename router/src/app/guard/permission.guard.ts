//路由守卫 路由守卫就是拦截器
import {CanActivate} from "@angular/router";
export class PermissionGuard implements CanActivate {
	canActivate() {

		let hasPermission: boolean = Math.random() < 0.5;

		if(!hasPermission) {
			console.log("用户无权限访问此股票详情");
		}
		return hasPermission;//如果返回的是false则不会跳转到下一个路由
	}
}