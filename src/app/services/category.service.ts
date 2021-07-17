import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Category } from '../models/category.model';
import { CategoryList } from '../models/category-list.model';
import { HttpService } from '../shared/HttpService';
import { AppConfig } from 'src/app/shared/App.Config';
import { Constants } from 'src/app/shared/Constant';

// const baseUrl = 'https://main-shopper-k2vermp6up0tkljs-gtw.qovery.io';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiServer: any;
  token: string;
  constructor(private http: HttpClient, private _http: HttpService) {
    if (AppConfig.settings)
      this.apiServer = AppConfig.settings.apiServer;
    //this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDFlMWMwNWRkZmM3OWExZTdiYTc5NiIsImlhdCI6MTYyNjQ0MDM0MywiZXhwIjoxNjI2NTI2NzQzfQ.gikgzr7fm-QpYO1DpX5bkRO6fp0wJIXZEdXHxIKr7No";
    this.token = JSON.parse(sessionStorage.getItem('userToken'));
  
  }

  getAll() {
    //debugger;
    let url = this.apiServer[Constants.BASE_URL] + this.apiServer[Constants.CATEGORY][Constants.CATEGORYLIST];
    return this._http.getService(url, null);
  }

  update(id: any, data: any) {
    debugger;
     
    let httpOptions = new HttpHeaders();
    httpOptions = httpOptions.set('x-access-token',JSON.stringify(sessionStorage.getItem('userToken')));

  }
  update_(id: any, data: any) {
    // return this.http.put(`${baseUrl}/${id}`, data);
    debugger;

    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token }) };
    
    let httpOptions = new HttpHeaders();
    httpOptions = httpOptions.set('x-access-token',JSON.stringify(sessionStorage.getItem('userToken')));
// opt.headers = headers;
// const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization':'Bearer ' + token})};
    

// const httpOptions = new HttpHeaders({
//       'Content-Type': 'application/json', 
//       'Access-Control-Allow-Origin': '*', 
//       'Access-Control-Allow-Credentials': 'true', 
//       'x-access-token': this.token
//       //'Authorization': `Bearer ${this.token}`
//       //'Authorization': 'Bearer ' + JSON.parse(param)
//     });
    let url = this.apiServer[Constants.BASE_URL] + this.apiServer[Constants.CATEGORY][Constants.CATEGORYID];
    //return this.http.put(`${url}/${id}`, data);
    url = url.replace("{ID}", id.toString());
    return this._http.putService(data, url, httpOptions);

  }

  // getAll(params: any): Observable<any> {
  //   return this.http.get<any>(baseUrl+"/api/category", { params });
  // }

  // get(id: any): Observable<Category> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  create(data: any): Observable<any> {
    return;//this.http.post(baseUrl+ "/api/category", data);
  }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title: any): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  // }
}




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Tutorial } from '../models/tutorial.model';
// import { Category } from '../models/category.model';
// import { CategoryList } from '../models/category-list.model';
// import { HttpService } from '../shared/HttpService';
// import { AppConfig } from 'src/app/shared/App.Config';
// import { Constants } from 'src/app/shared/Constant';
// const baseUrl = 'https://main-shopper-k2vermp6up0tkljs-gtw.qovery.io';


// @Injectable({
//   providedIn: 'root'
// })
// export class CategoryService {

//   private apiServer: any;
//   constructor(private http: HttpClient, private _http: HttpService) {
//     if (AppConfig.settings)
//       this.apiServer = AppConfig.settings.apiServer;
//   }

//     getAll() {
//     //debugger;
//     let url = this.apiServer[Constants.BASE_URL] + this.apiServer[Constants.CATEGORY][Constants.CATEGORYLIST];
//     return this._http.getService(url, null);
//   }
//   // getAll(params: any): Observable<any> {
//   //   return this.http.get<any>(baseUrl+"/api/category", { params });
//   // }

//   get(id: any): Observable<Category> {
//     return this.http.get(`${baseUrl}/${id}`);
//   }

//   create(data: any): Observable<any> {
//     debugger;
//     return this.http.post(baseUrl+ "/api/category", data);
//   }

//   update(id: any, data: any): Observable<any> {
//     return this.http.put(`${baseUrl}/${id}`, data);
//   }

//   delete(id: any): Observable<any> {
//     return this.http.delete(`${baseUrl}/${id}`);
//   }

//   deleteAll(): Observable<any> {
//     return this.http.delete(baseUrl);
//   }

//   findByTitle(title: any): Observable<Tutorial[]> {
//     return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
//   }
// }
