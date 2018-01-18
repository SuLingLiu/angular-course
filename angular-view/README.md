# 父组件如何获取子组件的方法和属性，以及ngAfterViewInit，ngAfterViewChecked生命周期
## 父组件获取子组件的属性和方法
1. 通过在调用子组件上加#child2 这样child2相当于子组件变量

```
<app-child #child2></app-child>
<button (click)="child2.greeting('Jerry')">调用child2的greeting方法</button>
```

2. 父组件里通过装饰器@ViewChild

```
 @ViewChild('child1')
  child1: ChildComponent;

  ngOnInit(): void {
    setInterval(() => {
      this.child1.greeting(('Tom'));
    }, 5000)
  }
```
## ngAfterViewInit，ngAfterViewChecked生命周期
具体可以参考里面的demo
