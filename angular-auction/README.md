## angular-组件库

- AdminLTE：https://github.com/almasaeed2010/AdminLTE，基于bootstrap3的后台管理模板
    预览页：https://adminlte.io/themes/AdminLTE/index.html#
    文档：https://adminlte.io/docs/2.4/layout

    cnpm install admin-lte --save
    
    用法：文档里有starter page，点开进入，查看源代码，拷贝body里面的代码到主组件，再修改里面样式和js的引用，也可把代码拆分成不同的组件引入，不要忘了给body设置样式
    
    安装bootstrap:cnpm install bootstrap --save
    
    安装jquery：cnpm install jquery --save
    
    之后参考预览页，找你面的组件，看到适合的，查看源代码，拷贝其代码即可
    
    
```
//在.angular-cli.json引入，如果路径不对，请查看目录后修改
"styles": [
    "styles.css",
    "../node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css",
    "../node_modules/_admin-lte@2.4.2@admin-lte/dist/css/AdminLTE.min.css",
    "../node_modules/_admin-lte@2.4.2@admin-lte/dist/css/skins/skin-blue.min.css"
  ],
  "scripts": [
    "../node_modules/_jquery@3.2.1@jquery/dist/jquery.min.js",
    "../node_modules/_bootstrap@3.3.7@bootstrap/dist/js/bootstrap.min.js",
    "../node_modules/_admin-lte@2.4.2@admin-lte/dist/js/AdminLTE.min.js"
  ]
```
再在styles.css里引用

```
@import "~https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "~https://cdn.bootcss.com/ionicons/2.0.1/css/ionicons.min.css";
```


## 父组件向子组件传值

```
//父组件的模板里加属性
<app-stars [rating]="stock.rating">

//子组件引入Input装饰器
import { Component, OnInit, Input } from '@angular/core';

在类里面的变量声明前加上@Input()
@Input()
  rating: number = 0;
```

    
        
