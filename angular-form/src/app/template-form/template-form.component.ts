import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  // 表单模板状态校验实现起来很麻烦，它不能在模板上使用状态属性，因为模板是异步的，走的那的时候对象还没生成，如果要写，需要如下操作

  private mobileValid:boolean = true;
  private mobilePristine:boolean = true;
  onMobileInput(form: NgForm) {
    if(form) {
      this.mobileValid = form.form.get('mobile').valid;
      this.mobilePristine = form.form.get('mobile').pristine;
    }
  }

  constructor() { }
  ngOnInit() {
  }
  createUser(info:any, valid: boolean) {
    console.log(valid,111); //校验通过valid为true
    console.log(info)
  }

}
