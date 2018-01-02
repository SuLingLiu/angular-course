import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle: string = '';
  pageDesc: string = '';

  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)//选择路由结束事件
      .subscribe((event: NavigationEnd) => {
          if(event.url == '/dashboard') {
            this.pageTitle = '这是首页';
            this.pageDesc = '';
          }else {
            this.pageTitle = '股票信息管理';
            this.pageDesc = '进行股票信息基本增删改查';
          }
      })
  }
  ngOnInit() {}
}
