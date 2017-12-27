## angular-cli
[网址](https://github.com/angular/angular-cli)

![image](./markdow-img/catalog.png)

## 工具
VSCode配置：

Debug + Angular 2 + Snippets

Debugger for Chrome使VSC可以Debug Angular应用

Chrome配置：安装Augury创建

安装chrome插件打开https://chrome-extension-downloader.com/，输入id：elgalmkoelokbchhkhacckoklkejnhcd，下载下来，再把该插件拖到chrome://extensions/里即可

## 常用命令

- ng new 项目名：新建angular项目
- ng bulid -prod:生产环境编译 
- ng serve -o: 启动开发服务器，并开启浏览器访问
- ng new taskmgr -si --style=scss
- 创建模块：ng g m core
- 创建组件：ng g c core/header --spec=false
- 访问路径：http://localhost:4200/

## Mock Rest API

- json-server：用于快速搭建REST API的利器
1. 安装：npm install -g json-server
2. 使用：输入json-server ./mock/data.json 后面是对应json文件的地址，启动后访问http://localhost:3000
- https://www.getpostman.com/，下载postman安装，填了数据后会自动更新访问的json文件
- 还可以用VSCode的REST Client插件

## 安装过程中遇到问题

先uninstall，再清缓存npm cache verify，再安装

## angular-组件库

- Material: https://material.io/components/
	安装带版本的：cnpm i --save @angular/material@2.0.0-beta.7
	图标：https://material.io/icons/

## angular.json

- assets:静态服务器的配置，如果想要一个目录变成静态文件可在此处加入，然后访问如：http://localhost:4200/assets/gifts.svg

## 错误

- 需要引入http：HeaderComponent.html:5 ERROR Error: Could not find Http provider for use with Angular Material icons. Please include the HttpModule from @angular/http in your app imports.

## 问题

1. 如何实现有webpack的功能，代码分割，按需加载。

