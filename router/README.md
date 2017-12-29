## 学习的主要内容
1. 了解路由的基础知识
2. 子路由、路由参数、辅助路由、路由守卫
3. 如何添加路由

## 路由基础
命令：ng new router --routing,会自动生成一个app-routing.module.ts并对其进行导入和基础配置

![image](./img/router.png)

- 配置路由模块
- 引入插座<router-outlet></router-outlet>
- routerLink

## 路由参数
![image](./img/router-para.png)

## 辅助路由
用于类似侧导航的咨询等相关位置功能，很多页面都有

![image](./img/router-aux1.png)
![image](./img/router-aux2.png)

## 路由守卫
所谓的路由守卫其实就是拦截器，在进入路由和离开路由去执行一些逻辑

![image](./img/router-can.png)
