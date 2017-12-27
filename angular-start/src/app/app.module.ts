import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [     //只能声明组件，管道，指令
    AppComponent
  ],
  imports: [     //引用其它模块
    BrowserModule
  ],
  providers: [],   //声明服务
  bootstrap: [AppComponent]  //声明模块的主组件
})
export class AppModule { }
