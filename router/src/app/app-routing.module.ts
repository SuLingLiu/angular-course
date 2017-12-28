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
 * 注意：
 *      path属性不要用/开头，angular做了处理
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
		//canActivate: [PermissionGuard],//路由守卫，接受的是一个数组，数组里的值是布尔值，可以是多个，一级一级守卫，PermissionGuard是一个类，之所以不用new是因为在app.module.ts里的providers里加入，angular会去实例化
		// canDeactivate: [FocusGuard],
		resolve: {
			stock: StockResolve
		}
	},
	{path: '**', component: Code404Component}//匹配所有页面，但是放到最后面，如果前面有，就不会往后走
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
