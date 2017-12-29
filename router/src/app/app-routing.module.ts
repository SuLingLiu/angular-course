import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard } from './guard/permission.guard';
import { FocusGuard } from './guard/focus.guard';
import { StockResolve } from './guard/stock.resolve';

/**
 * 1.path属性不要用/开头，angular做了处理
 * 2.路由参数的处理，路由跳转的处理
 * 3.重定向redirectTo，带/
 *      pathMatch有两个值  full、prefix
 *      full表示只有精准的path路径才会跳到重定向的路由
 *      prefix表示只要是path路径开头的都会跳到重定向的路由
 *
 * 4.子路由，在根路由里增加children属性，如下，当访问stock/1时显得的是BuyerListComponent，访问stock/1/seller/100显示的是 SellerListComponent组件
 *    <a [routerLink]="['./']">买家列表</a> 主路由是/，子路由需要用./表示是从当前路由下去找
 *
 * 5.辅助路由 {path: 'consult', component: ConsultComponent, outlet:"aux"}在对应插座处渲染组件
 *
 * 6.路由守卫：所谓的路由守卫其实就是拦截器，在进入路由和离开路由去执行一些逻辑， canActivate和 canDeactivate接收的是数组，只要有一个返回false，就不会跳转路由，再者调用的类不用实例化，是因为在providers提供了(一定不要晚了这里的配置)，具体参考guard文件夹
 *
 *
 * 配置一个通配路由**，以容错不存在的页面，匹配所有页面，但是放到最后面，如果前面有，就不会往后走
 *
 * */

const routes: Routes = [
	//{path: 'xx', redirectTo: '/home', pathMatch: 'prefix'},//表示只要是xx开头的都会跳到home
	{path: '', redirectTo: '/home', pathMatch: 'full'},//表示full表示只有精准的是空字符串才会跳到home
	{path: 'home', component: HomeComponent},//path属性不要用/开头，angular做了处理
	{path: 'consult', component: ConsultComponent, outlet:"aux"},//path属性不要用/开头，angular做了处理
	{path: 'stock/:id', component: StockComponent, data: [{isPro: true}],
		children: [
			{path: '', component: BuyerListComponent},
			{path: 'seller/:id', component: SellerListComponent}
		],
		//canActivate: [PermissionGuard],//路由守卫，接受的是一个数组，数组里的值是布尔值，可以是多个，一级一级守卫，如果有一个返回false,就进不去这个守卫，PermissionGuard是一个类，之所以不用new是因为在app.module.ts里的providers里加入，angular会去实例化
		// canDeactivate: [FocusGuard],

    // resolve的含义是在进入这个路由的时候会携带数据过去，数据是从StockResolve中获取
		resolve: {
			stock: StockResolve
		}
	},
	{path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
