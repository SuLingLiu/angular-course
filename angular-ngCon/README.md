## ng-content指令(投影)相当于vue的slot

```
//子组件模板
<div style="border: 1px solid red;">
  <!-- 考虑到要在这里面放的是不同的内容如 img p 标签等-->
  <!-- 方案一：可以用路由   router-outlet标签，这样会非常麻烦-->
  <!-- 方案二：用属性绑定-->
  <!--<div [innerHTML]="content"></div> -->
  <!-- 方案三：ng-content 常见的如：轮播图，下拉列表上拉加载，下拉刷新,显示不同的内容，可以用一个标识，select的值是对应调用组件时的class如下-->
  <ng-content select=".red"></ng-content>
</div>
<div style="border: 1px solid green;">
  <ng-content select=".green"></ng-content>
</div>


//父组件模板 组件里元素的class不用给它写样式，他是对应子组件里的select属性
 <app-red-border>
    <div class="red">这是红框里的内容</div>
    <div class="green">这是绿框里的内容</div>
  </app-red-border>

```

## ngAfterContentInit、ngAfterContentChecked组件投影内容初始化完毕，组件投影内容变更检测完毕
在这里修改被绑定的属性值是不会报错的，具体看demo

## OnDestroy
一般会在这个阶段清除一些引用的资源如：反定义一个流，清除定时器
