import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class WebSocketService {

  ws: WebSocket;

  //这个服务需要实现两个方法，然后接收服务器发过来的消息，第二个要向服务器发送消息
  constructor() { }

  //
  connect(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
       observer => {
         this.ws.onmessage = (event) => observer.next(event.data);
         this.ws.onerror = (event) => observer.error(event);
         this.ws.onclose = (event) => observer.complete();
       }
    )
  }

  send(message: string) {
    this.ws.send(message);
  }
}
