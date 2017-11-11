import {AfterContentChecked, AfterContentInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-red-border',
  templateUrl: './red-border.component.html',
  styleUrls: ['./red-border.component.css']
})
export class RedBorderComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @Input()
  content: string;
  ngAfterContentInit(): void {
    console.log('子组件投影内容初始化完毕');
  }

  ngAfterContentChecked(): void {
    console.log('子组件投影内容变更检测完毕');
  }
  constructor() { }

  ngOnInit() {
  }

}
