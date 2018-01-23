import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {passwordValidator} from "../validators/validators";

@Directive({
  selector: '[password]',  //指令要加中括号，他除了没有模板其他的跟组件一样
  providers: [{provide: NG_VALIDATORS, useValue: passwordValidator, multi: true}]
})
export class PasswordValidatorDirective {

  constructor() { }

}
