import { Component, OnInit } from '@angular/core';
import {WebSocketService} from "../shared/web-socket.service";

@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css']
})
export class Stock2Component implements OnInit {

  //angular并没有实现一个类似http的服务的类，来实现websoket的连接，所以需要自己写一个服务来产生流
  constructor(public wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.connect('ws://localhost:8081')
      .subscribe(
        data => console.log(data),
        error => console.log(error),
      () => console.log('服务器连接已经断开')
      );
  }

  send() {
    this.wsService.send('这是从客户端发来的消息');
  }

}
