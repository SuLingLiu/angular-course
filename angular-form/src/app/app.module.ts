import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactivedFormComponent } from './reactived-form/reactived-form.component';
import { ReactivedFormBuildComponent } from './reactived-form-build/reactived-form-build.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactivedFormComponent,
    ReactivedFormBuildComponent,
    MobileValidatorDirective,
    PasswordValidatorDirective  //指令可以理解为没有模板的组件
  ],
  imports: [
    BrowserModule,
    FormsModule, //模板式表单
    HttpModule,
    ReactiveFormsModule//响应式表单
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
