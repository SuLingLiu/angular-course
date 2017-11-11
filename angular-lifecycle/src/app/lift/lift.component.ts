import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex:number = 1;

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})
export class LiftComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked, AfterContentChecked, AfterViewInit, AfterContentInit, OnDestroy {

  @Input()
  name: string = 'Tom';
  logIte(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }
  constructor() {
    this.logIte('name属性在constructor里的值是：'+name);
  }

  ngOnInit() {
    this.logIte('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'].currentValue;
    this.logIte('name属性在ngOnChanges里的值是：'+name);
  }

  ngDoCheck(): void {
    this.logIte('ngDoCheck');
  }

  ngAfterViewChecked(): void {
    this.logIte('ngAfterViewChecked');
  }

  ngAfterContentChecked(): void {
    this.logIte('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logIte('ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    this.logIte('ngAfterContentInit');
  }

  ngOnDestroy(): void {
    this.logIte('ngOnDestroy');
  }

}
