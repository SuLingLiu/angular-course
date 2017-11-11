# Angular新特性
- 全新的命令行工具AngularCLI
    
    AngularCLI是angular团队开发团队提供的一个官方的命令行工具，它提供了很多方便的功能来供我们开发，比喻生成一个新项目的骨架，生成我们基础的组件代码，或者作为一个开发服务器，供我们调试、编译、构建并且部署我们的代码，运行自动化的单元测试等等。
- 服务器端渲染
    
    它可以解决一些很麻烦的问题，首先它可以解决一个原本需要10s才能加载完的单页应用，只需要1s可以呈现在用户面前，其次，它可以是每一个视图做SEO优化，单页应用，
- 移动和桌面兼容
## 与React对比
- 速度
- FLUX架构
- 服务器渲染
## 与Vue对比
### Vue优点
- 简单
- 灵活
- 性能
### angular优点
- 个人主导
- 只关注web
- 服务器渲染
## Angular程序架构
angular必须有一个模块和一个组件。
### Component
- 装饰器：@Component(),用来告知框架如何处理typescrip类，它还包括多个属性，这些属性的值叫做原数据，根据元数据来渲染组件，并执行组件的逻辑。
- 模板：Template
- 控制器：Controller,包括组件的属性和方法，绝大多数的逻辑是写在这里
## 搭建Angular开发环境
- 只能用npm来装npm install -g，@angular/cli，不然使用的时候会有问题
- ng new taskmgr --skip-install  （ng new taskmgr -si --style=scss）
- ng g component header(ng g c header),生成一个组件，ng g component stock/stockManage，子组件，模块的根元素不局限于一个
- ng new router --routing
- ng g service shared/stock
- ng g pipe pipe/multiple
- ng g directive directives/mobileValidator