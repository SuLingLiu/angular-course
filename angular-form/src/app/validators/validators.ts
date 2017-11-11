
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

export function mobileValidator(mobile: FormControl): any {
  let value = (mobile.value || '') + '';
  let myreg = /^1[3|4|5|8][0-9]\d{4,8}$/;
  let valid = myreg.test(value);
  console.log('手机是否校验通过' + valid);
  return valid ? null : {mobile: true};
}

export function mobileAsyncValidator(mobile: FormControl): any {
  let value = (mobile.value || '') + '';
  let myreg = /^1[3|4|5|8][0-9]\d{4,8}$/;
  let valid = myreg.test(value);
  console.log('手机是否校验通过' + valid);
  // return valid ? null : {mobile: true};
  //这是为了模拟远程服务所以用了延迟5秒,5s后数据回来
  return Observable.of(valid ? null : {mobile: true}).delay(5000);
}

export function passwordValidator(info: FormGroup): any {
  //info.get('password')获取的是抽象类，需要转换一下
  let password: FormControl = info.get('password') as FormControl;
  let passwordConfirm: FormControl = info.get('passwordConfirm') as FormControl;
  if(password !=null && passwordConfirm !=null) {

    let valid: boolean = password.value ===  passwordConfirm.value;
    console.log('password是否校验通过：'+ valid);

    // return valid ? null : {password: true};
    return valid ? null : {password: {description: '密码和确认密码不匹配'}};
  }

  return null;
}
