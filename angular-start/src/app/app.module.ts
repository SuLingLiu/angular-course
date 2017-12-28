import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [     //只能声明组件，管道，指令
    AppComponent
  ],
  imports: [     //其他模块和正常运转需要的其他东西
    BrowserModule,//浏览器模块
    FormsModule, //处理表单的模块
    HttpModule, //处理请求
  ],
  providers: [],   //声明服务
  bootstrap: [AppComponent]  //声明模块的主组件
})
export class AppModule { }
