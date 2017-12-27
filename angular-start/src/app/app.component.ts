import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //标签名
  templateUrl: './app.component.html',  //模板是组件的必备要素
  styleUrls: ['./app.component.css']
})
export class AppComponent {    //里面定义了组件的控制器，它包含了组件所有的方法和属性
  title = 'app';
}
