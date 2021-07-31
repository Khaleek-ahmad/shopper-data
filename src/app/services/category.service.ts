import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/HttpService';
import { AppConfig } from 'src/app/shared/App.Config';
import { Constants } from 'src/app/shared/Constant';

// const baseUrl = 'https://main-shopper-k2vermp6up0tkljs-gtw.qovery.io';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiServer: any;
  constructor(private http: HttpClient, private _http: HttpService) {
    if (AppConfig.settings)
      this.apiServer = AppConfig.settings.apiServer;  
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

    let url = this.apiServer[Constants.BASE_URL] + this.apiServer[Constants.CATEGORY][Constants.CATEGORYID];

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
    // return this.http.post(baseUrl+ "/api/category", data);
    return this.http.post(this.apiServer[Constants.BASE_URL]+"api/category", data);
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
