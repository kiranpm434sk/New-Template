import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../tabledata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // showFiller = false;
  visibleSidebar1;

  constructor(private _userdata:TabledataService) { }

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
  onLogOut(){
    this._userdata.logout();
  }
  isLoggedIn(){
    return this._userdata.isLoggedIn;
  }
}
