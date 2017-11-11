import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('child1组件被销毁')
  }

  constructor() { }

  ngOnInit() {
  }

}
