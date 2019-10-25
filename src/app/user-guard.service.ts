

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';


import { TabledataService } from './tabledata.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate, CanLoad {

  constructor(private _userdata: TabledataService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.isUserLoggedIn(state.url);
  }
  canLoad(_route: Route) {
    return this.isUserLoggedIn(_route.path);
  }
  isUserLoggedIn(url: string): boolean {

    if (this._userdata.isLoggedIn) {
      return true;
    }
    this._userdata.redirectURL = url;
    this._router.navigate(['/login']);
    return false;
  }
}
