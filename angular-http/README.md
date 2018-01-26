# http请求
 因服务器不在同一个端口，需要配置代理，新建一个pxoxy.conf.json，并在package.json文件里配置"start": "ng serve --proxy-config proxy.conf.json"，启动命令必须为npm run start，用ng serve不行，angualr会帮助转到对应的服务器
 
##  异步管道

```
<ul>
  <li *ngFor="let stock of stocks | async">{{stock.name}}</li>
</ul>
<!-- async 接受流信息，自动订阅-->
```

## websoket
具体请看demo
