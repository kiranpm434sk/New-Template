import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {
  url: string = 'https://3df52e24.ngrok.io/api/Settings/GetDesignations';
  url1: string ='https://3df52e24.ngrok.io/api/Settings/InsUpdateDesignation';
  url2: string ='https://3df52e24.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';
  redirectURL: any;
  currentUser: { user_email: string; password: string; isAdmin: boolean; };
  constructor(private http: HttpClient,private _router:Router) { }

//Gett Method
  getAllDesignations(){
   return this.http.get(this.url);
  }

//Add Method
addDesignations(item){
  console.log(item);
  let body = JSON.stringify(item);
  let head = new HttpHeaders().set("content-Type","application/json");
  return this.http.post(this.url1, body , {headers: head});
}

//Edit Method
editDesignations(item){
  let body = JSON.stringify(item);
  let head = new HttpHeaders().set("content-Type","application/json");
  return this.http.post(this.url1, body , {headers: head});
}


//Delete Method
deleteDesignations(DesignationId){
  console.log(DesignationId);
  let head = new HttpHeaders().set("content-Type","application/json");
  return this.http.post(this.url2 + DesignationId, { headers: head });
}


login(user_email: string, user_password: string) {
  if (user_email == "admin" && user_password == "1234") {
    this.currentUser = {
      user_email: user_email,
      password: user_password,
      isAdmin: true
    };
    return;
  }
  this.currentUser = {
    user_email: user_email,
    password: user_password,
    isAdmin: false
  };
}
logout() {
  this.currentUser = null;
  this.redirectURL = "";
  this._router.navigate([""]);
}
get isLoggedIn(): boolean {
  return !!this.currentUser;
}
}
