## 数据绑定
![image](./img/bind-data1.png)
![image](./img/bind-data2.png)

### dom属性和html属性

```
<input type="text" value="Tom" (input)="doOnInput($event)">

doOnInput(event: any) {
    //这里拿的是dom属性， 是随时变的
    console.log(event.target.value);
    //这里拿的是html属性 它的值不变是初始的值，html的值不能改变
    console.log(event.target.getAttribute('value'),111);
}

<!--disabled属性不管设计什么值都会是禁止点击，但是可以通过设置dom属性来开启或禁止 -->
<button disabled>点我</button>

```

#### dom属性和html属性的关系
- 少量HTML属性和DOM属性之间有着1:1的映射，如id
- 有些HTML属性没有对应的DOM属性，如colspan
- 有些DOM属性没有对应的HTML属性，如textContent
- 就是名字相同，HTML属性和DOM属性也不是同一样东西
- HTML属性的值指定了初始值，DOM属性的值表示当前值
- DOM属性的值可以改变，HTML属性的值不能改变
- 模板绑定是通过DOM属性和事件来工作的，而不是HTML属性

#### HTML属性绑定
- 基本HTML属性绑定
<td [attr.colspan]="tableColspan">Something</td>
- css类绑定
1.  <div class="aaa bbb" [class]="someExpression">Something</div>,这个表达式的值会完全替换掉calss里的值
2.  <div [class.special]="isSpecial">Something</div>，这个则不会
3.  <div [ngClass]="{aa: isA, bb: isB}">Something</div>
- 样式绑定
1.  <button [style.color]="isSpecial ? 'red' : 'green'">Red</button>

## 响应式编程

```
//首先在模块里要引入import { ReactiveFormsModule } from '@angular/forms';响应式编程模块
//在组件里要引入
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

//类里面
//FormControl每个表单都会有这个
searchInput:FormControl = new FormControl();

constructor() {

    this.searchInput.valueChanges//valueChange是一个流，值发生改变就会调用这个事件
      .debounceTime(500) //debounceTime需要引用rxjs/Rx 每隔500毫秒提交一次
      .subscribe(stockCode => this.getStockInfo(stockCode));
}


getStockInfo(value:string) {
    console.log(value);
}

//模板里
<input type="text" [formControl]="searchInput" placeholder="响应式编程">

```
## 管道

```
//模板
1.管道于值以|隔开，可以传递多个管道，以|隔开
2.管道还可以传递参数，以:隔开
3.angular有内置管道，也可以自定义广告

//angular内置了10几个管道
/*
*  创建管道的命令：ng g pipe pipe/multiple
*  date可以接受参数   时钟的HH代表24小时制，hh代表12小时制
*  uppercase
*  lowercase
*  number number:'2.2-2' 参数第一个2表示整数，第二个2表示最少的小数表示几位，第三个2表示最多的整数表示几位
*  async 处理流
* */

注：
    1.number:'2.2-2' 2.2-2小数点的2表示整数位数，2-2前面的2表示最小多少位，后面的表示最大多少位

<p>我的生日是{{birthday | date:'yyyy-MM-dd HH:mm:ss' | uppercase}}</p>
<p>圆周率是{{Pi | number:'2.2-2'}}</p>
<p>自定义管道 {{size | multiple: 2}}</p>

//模块，管道需要声明在模块的declarations里

//管道
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple' //管道名字
})
export class MultiplePipe implements PipeTransform {
  //参数一：输入值，原始值，参数二：参数
  transform(value: number, args?: any): any {
    if(!args) {
      args = 1;
    }
    return value * args;
  }

}



```
