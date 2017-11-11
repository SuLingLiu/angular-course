import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import {HttpModule} from "@angular/http";
import { Stock1Component } from './stock1/stock1.component';
import { Stock2Component } from './stock2/stock2.component';
import {WebSocketService} from "./shared/web-socket.service";

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock1Component,
    Stock2Component
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
