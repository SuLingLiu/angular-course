import { Component } from '@angular/core';

/**
 * 组件包含以下内容
 * 1. 装饰器@Component 装饰器里包含元数据
 *    标签
 *    模板
 *    样式
 *    动画
 *    提供器providers
 *
 * 2.控制器就是类
 * 3.生命周期钩子
 * 4.输入属性@Inputs()
 * 5.输出属性@Outputs()
 * */

// @Component叫装饰器，里面的对象叫元数据
@Component({
  selector: 'app-root', //标签名
  templateUrl: './app.component.html',  //模板是组件的必备要素
  styleUrls: ['./app.component.css']
})

//在类里增加了装饰器和元数据才能形成组件
export class AppComponent {    //里面定义了组件的控制器，它包含了组件所有的方法和属性
  title = 'app';
}
