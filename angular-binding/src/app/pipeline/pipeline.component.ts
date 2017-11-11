import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {
  //
  birthday: Date = new Date();
  Pi: number = 3.1415926;
  size: number = 2;
  constructor() {
  }

  ngOnInit() {
  }

}

//<p>我的生日是{{birthday | date:'yyyy-MM-dd HH:mm:ss' | uppercase}}</p>
//angular内置了10几个管道
/*
*  创建管道的命令：ng g pipe pipe/multiple
*  date可以接受参数   时钟的HH代表24小时制，hh代表12小时制
*  uppercase
*  lowercase
*  number number:'2.2-2' 参数第一个2表示整数，第二个2表示最少的小数表示几位，第三个2表示最多的整数表示几位
*  async 处理流
* */
