// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

import { Router } from "@angular/router";
import { TabledataService } from '../tabledata.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _userdata: TabledataService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      user_email: new FormControl(),
      user_password: new FormControl()
    });
  }
  onLoginSubmit(login) {
    this._userdata.login(
      this.login.value.user_email,
      this.login.value.user_password
    );
    if (this._userdata.redirectURL) {
      this._router.navigateByUrl(this._userdata.redirectURL);
    } else {
      this._router.navigate(["/home"]);
    }
  }
}
