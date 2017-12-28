## 学习的主要内容
1. 了解路由的基础知识
2. 子路由、保护路由、辅助路由
3. 如何添加路由

## 路由基础
命令：ng new router --routing,会自动生成一个app-routing.module.ts并对其进行导入和基础配置

![image](./img/router.png)

- 配置路由模块

```
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
```

- 引入插座<router-outlet></router-outlet>
- routerLink
```
<a [routerLink]="['/home']">主页</a>
<!-- <a [routerLink]="['/stock']" [queryParams]="{id: 1}">股票详情</a> -->
<a [routerLink]="['/stock', 1]">股票详情</a>
```
