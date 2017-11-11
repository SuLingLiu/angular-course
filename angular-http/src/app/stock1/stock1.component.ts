import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import "rxjs/Rx";
import {Http, Headers} from "@angular/http";

@Component({
  selector: 'app-stock1',
  templateUrl: './stock1.component.html',
  styleUrls: ['./stock1.component.css']
})
export class Stock1Component implements OnInit {
  stocks: Observable<any>;
  constructor(public http: Http) {

    let myHeaders:Headers = new Headers();
    myHeaders.append('Authorization', 'Basic 123456');
    this.stocks = this.http.get('/api/stock', {headers: myHeaders}).map(response => response.json())
  }

  ngOnInit() {
  }

}
