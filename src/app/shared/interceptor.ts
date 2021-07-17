import { Injectable, isDevMode } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse
} from '@angular/common/http';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { debug } from 'util';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
const TOKEN_HEADER_KEY = 'Authorization';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/AuthService';



@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  constructor(private router: Router,
    private authService: AuthService,
    private toastr?: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    debugger;
    let authReq = req;
    if (authReq.headers.get('No-Auth') == "True" || (authReq.headers.get("Authorization") != null && authReq.headers.get("Authorization").includes("Basic")))
      return next.handle(authReq);

    if (!req.url.includes('authenticate')) {

      req.headers.set('Cache-control', 'no-cache');
      req.headers.set('Cache-control', 'no-store');
      req.headers.set('Expires', '0');
      req.headers.set('Pragma', 'no-cache');
      let token = null;
      this.authService.getToken().subscribe(x => token = x);
      if(token==null){
        token = sessionStorage.getItem("userToken");
      }
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }

    return next.handle(authReq).pipe(tap(() => { },
      (err: any) => {
        console.log("Inside error ", err);

        let msg = { "request": null, "error": null };
        msg.request = authReq;
        msg.error = err;
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            localStorage.clear();
            this.router.navigate(['/login']);
          }
          if (err.status === 200) {

          }
          else {
            throw msg;
          }
        }
      }
    ));
  }
}
