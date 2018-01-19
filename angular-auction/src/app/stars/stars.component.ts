import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {



  @Input()
  rating: number = 0;

  //ratingChange 输入属性写rating，输出写ratingChange就能组成自定义的双向数据绑定
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[];

  @Input()
  readonly: boolean = true;

  constructor() { }

  ngOnInit() {
    /*this.stars = [];
    for(let i=1; i<=5; i++) {
      this.stars.push(i > this.rating ) ;
    }*/
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for(let i=1; i<=5; i++) {
      this.stars.push(i > this.rating ) ;
    }
  }

  clickStar(index: number) {
    if(!this.readonly) {
      this.rating = index + 1;
      //此处的代码和ngOnInit里的代码重了，之所以可以放到ngOnChnages是因为输入属性初始化和父组件对应的这个属性发生改变的时候都会触发，可以减少代码量
      /*this.stars = [];
      for(let i=1; i<=5; i++) {
        this.stars.push(i > this.rating ) ;
      }*/
      this.ratingChange.emit(this.rating);

    }

  }

}
