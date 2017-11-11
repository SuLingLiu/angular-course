import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {mobileValidator} from "../validators/validators";

@Directive({
  selector: '[mobile]', //表示指令是用属性来用的
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}]   //multi为true表示可以挂多个值
})
export class MobileValidatorDirective {

  constructor() { }

}
