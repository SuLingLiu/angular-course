import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  private imgUrl: string = '../../assets/timg.jpg';
  private size: number = 2;
  private isC: boolean = false;
  private moreClass: any = {
    a: true,
    b: false,
    c: true
  };
  private divStyle:any = {
    color: 'red',
    background: 'yellow'
  };
  private divClass:string;
  private isDev: boolean = false;
  private name: string = 'hello';
  constructor() {

    setTimeout(() => {
      this.divClass = 'a b c';
      this.isC = true;
      this.moreClass.b = true;
      this.isDev = true;
      this.divStyle = {
        color: 'yellow',
        background: 'red'
      };

    }, 3000)
  }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    //这里拿的是dom属性， 是随时变的
    console.log(event.target.value);
    //这里拿的是html属性 它的值不变是初始的值，html的值不能改变
    console.log(event.target.getAttribute('value'),111);
  }

}
