import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {
  url: string = 'https://5f0c803e.ngrok.io/api/Settings/GetDesignations';
  url1: string ='https://5f0c803e.ngrok.io/api/Settings/InsUpdateDesignation';
  url2: string ='https://5f0c803e.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';
  constructor(private http: HttpClient) { }

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

}
