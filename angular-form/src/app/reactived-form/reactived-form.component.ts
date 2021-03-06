import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactived-form',
  templateUrl: './reactived-form.component.html',
  styleUrls: ['./reactived-form.component.css']
})
export class ReactivedFormComponent implements OnInit {

  private formModel: FormGroup;//包含一组值，里面可以包含FormControl和FormArray，每一个input都用一个FormControl来控制，FromArray表示的是数组

  constructor() {
    this.formModel = new FormGroup({
      nickname: new FormControl(),
      mobile: new FormControl(),
      emails: new FormArray([
        new FormControl()
      ]),
      passwordInfo: new FormGroup({
        password: new FormControl(),
        passwordConfirm: new FormControl()
      })
    })
  }

  ngOnInit() {
  }

  createUser() {
    console.log(this.formModel.value);
  }

  addEmail() {
    //拿出来的时候是没有类型，需要用as强转成FormArray
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

}
