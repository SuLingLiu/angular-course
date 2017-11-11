import {AfterContentChecked, AfterContentInit, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//投影过来的内容发生变化后的钩子
export class AppComponent implements AfterContentInit, AfterContentChecked, AfterViewInit{
  ngAfterViewInit(): void {
    console.log('父组件视图内容初始化完毕');

  }
  //在下面的钩子里，去改变属性的值是不会发生报错
  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕');
  }

  ngAfterContentChecked(): void {
    console.log('父组件投影内容变更检测完毕');
  }
  xxx = '<div>sssss</div>';
  title = 'app';
  arr = [1,2,3];
}
