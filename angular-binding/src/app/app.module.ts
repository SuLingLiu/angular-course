import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { ProgrammeComponent } from './programme/programme.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { MultiplePipe } from './pipe/multiple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    ProgrammeComponent,
    PipelineComponent,
    MultiplePipe //管道需要声明在这
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule  //响应式编程模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
