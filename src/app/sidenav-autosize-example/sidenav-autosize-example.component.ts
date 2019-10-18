import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-autosize-example',
  templateUrl: './sidenav-autosize-example.component.html',
  styleUrls: ['./sidenav-autosize-example.component.css']
})
export class SidenavAutosizeExampleComponent implements OnInit {
  showFiller = false;
  constructor() { }


  hours: string;
  minutes: string;
  seconds: string;
  private timerId = null;

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }

}



// import {Component} from '@angular/core';

// /**
//  * @title Autosize sidenav
//  */
// @Component({
//   selector: 'sidenav-autosize-example',
//   templateUrl: 'sidenav-autosize-example.html',
//   styleUrls: ['sidenav-autosize-example.css'],
// })
// export class SidenavAutosizeExample {
//   showFiller = false;
// }
