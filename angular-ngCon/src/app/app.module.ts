import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedBorderComponent } from './red-border/red-border.component';
import { Child2Component } from './child2/child2.component';
import {RouterModule, Routes} from "@angular/router";
import { Child1Component } from './child1/child1.component';

let routeConfig: Routes = [
  {path: '', component: Child1Component},
  {path: 'child2', component:Child2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    RedBorderComponent,
    Child2Component,
    Child1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
