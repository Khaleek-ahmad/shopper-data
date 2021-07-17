import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpService {
  
  constructor(private _http: HttpClient) {
    
  }

  getService(url: string, param: any, responseType: string = ''): Observable<any> {
    //debugger;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (responseType != '') {
      return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true, responseType: 'text' });
    }
    else {
      return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true });
    }
  }

  // getService(url: any, param: any, responseType: string = ''): Observable<any> {
  //   //debugger;
  //   let headers = new HttpHeaders()
  //   headers = headers.set('Authorization', `Bearer ${this.token}`);
  //   return this._http.get(url, { headers });
  // }

  // getAgentService(url: string, param: any, responseType: string = ''): Observable<any> {
  //   debugger;
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json', 
  //     'Access-Control-Allow-Origin': '*', 
  //     'Access-Control-Allow-Credentials': 'true', 
  //     'Authorization': `Bearer ${param}`
  //     //'Authorization': 'Bearer ' + JSON.parse(param)
  //   });
  //   if (responseType != '') {
  //     return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true, responseType: 'text' });
  //   }
  //   else {
  //     return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true });
  //   }
  // }



  userAuthentication(url: string, email: string, password: string): Observable<any> {
    const credentials = { "email": email, "password": password };
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'true' });

    return this.post(credentials, url, reqHeader);

  }



  getService_111(url: string, param: any, responseType: string = ''): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (responseType != '') {
      return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true, responseType: 'text' });
    }
    else {
      return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true });
    }
  }
  postService(model: any, url: string, header?: any, isFile: boolean = false): Observable<any> {
    //debugger;
    if (isFile) {
      return this.post(model, url, header, isFile);
    }
    else {
      if (header == undefined)
        header = new HttpHeaders().set('Content-Type', 'application/json');
      //.set('observe','response');

      return this.post(model, url, header);
    }
  }

  private post(model: any, url: string, headers: HttpHeaders, isFile: boolean = false): Observable<any> {
    //debugger;
    var body = model;
    if (!isFile) {
      body = JSON.stringify(model);
    }
    return this._http.post(url, body, { headers, observe: 'response', reportProgress: true });
  }

  putService(model: any, url: string, header?: any): Observable<any> {
    debugger;
    
    if (header == undefined)
      header = new HttpHeaders().set('Content-Type', 'application/json')

    return this.put(model, url, header);
  }
  private put(model: any, url: string, headers: HttpHeaders): Observable<any> {

    var body = JSON.stringify(model);
    return this._http.put(url, body, { headers, observe: 'response', reportProgress: true });
  }

  deleteService(url: string, header?: any): Observable<any> {
    if (header == undefined)
      header = new HttpHeaders().set('Content-Type', 'application/json')

    return this.delete(url, header);
  }

  private delete(url: string, headers: HttpHeaders): Observable<any> {
    return this._http.delete(url, { responseType: 'text' });
  }


}
