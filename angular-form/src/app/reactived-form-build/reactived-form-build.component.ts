import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { passwordValidator, mobileValidator, mobileAsyncValidator } from '../validators/validators';

@Component({
  selector: 'app-reactived-form-build',
  templateUrl: './reactived-form-build.component.html',
  styleUrls: ['./reactived-form-build.component.css']
})

//formbuild是angular提供的一个工具类，它简化了定义表单数据的语法
//angular有两种校验器，一种是自定义的，一种是angular自带的
export class ReactivedFormBuildComponent implements OnInit {

  //以下就是angular的一个自定义的校验器，接收一个参数，是AbstractControl类型，它是FormControl, FormGroup等的父类，返回一个任意类型，但是它的key值必须是字符串
  xxxxx(param: AbstractControl): {[key:string]: any} {
    return null;
  }

  private formModel: FormGroup;

  private fb: FormBuilder = new FormBuilder();

  /*mobileValidator(mobile: FormControl): any {
    let value = (mobile.value || '') + '';
    var myreg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    let valid = myreg.test(value);
    console.log('手机是否校验通过' + valid);
    return valid ? null : {mobile: true};
  }

  passwordValidator(info: FormGroup): any {
    //info.get('password')获取的是抽象类，需要转换一下
    let password: FormControl = info.get('password') as FormControl;
    let passwordConfirm: FormControl = info.get('passwordConfirm') as FormControl;
    let valid: boolean = password.value ===  passwordConfirm.value;

    console.log('password是否校验通过：'+ valid);
    return valid ? null : {password: true};
  }*/

  constructor() {
    //Validators是内置校验器，多个可以用数组表示
    this.formModel = this.fb.group({
      nickname: ['1234', [Validators.required, Validators.minLength(6)]],  //数组的第一个值表示初始值，第二个表示校验方法，第三个表示异步方法，
      mobile: ['', mobileValidator, mobileAsyncValidator],    //先校验第二个参数，完了以后才会校验异步远程校验，可以用来校验手机的合法性，验证图片等
      emails: this.fb.array([
        ['']
      ]),
      passwordInfo:this.fb.group({   //给这组加校验规则
        password: ['',Validators.required],
        passwordConfirm: ['']
      }, {validator: passwordValidator})
    })
  }

  ngOnInit() {
  }

  createUser() {
    let nicknameValid:boolean = this.formModel.get('nickname').valid;
    console.log('nickname是否校验通过'+nicknameValid);

    let nicknameErrors:any = this.formModel.get('nickname').errors;
    console.log('nickname的校验信息：'+JSON.stringify(nicknameErrors))
    console.log(this.formModel.value);

    if(this.formModel.valid) {     //如果这个字段为真，表示所有校验都通个
      console.log('所以校验都通过')
    }
  }

  addEmail() {
    //拿出来的时候是没有类型，需要用as强转成FormArray
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

}
