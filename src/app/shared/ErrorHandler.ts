import { ErrorHandler, Injectable, Injector, Inject, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { HttpClient } from '@angular/common/http';

import { HttpService } from './HttpService';
import { AppConfig } from './App.Config';
import { Constants } from './Constant';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  constructor(@Inject(NgZone) private ngZone: NgZone, @Inject(Injector) private injector: Injector,
   private httpService: HttpService,
    private http: HttpClient
    ) {
    super();

  }

  // Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }

  public handleError(error: any): void {

    try {

      

      if (error.message == "Cannot read property 'setAttribute' of null" || error.message == "Error trying to diff '[object Object]'. Only arrays and iterables are allowed") {
        return;
      }
      this.ngZone.run(() => {

        console.log("error : ",error);
        
        const status = error.error&& error.error.status != undefined ? error.error.status : error.status;
        if (this.isApiError(status, error)) {
        
        
           
          const except = error.error && error.error.exception ? error.error.exception : "";
          let errorStr: string = "";
          
          if (error.error && error.error.error && error.error.error.errors){
            errorStr =  error.error.error.errors[0]=="error occurred"?null:error.error.error.errors[0];
          }
          // else if( error.error.error.Message!= undefined ){
          //   errorStr =  error.error.error.Message + "\n" + except;
          // }
          // else if (error.error.error.message != undefined) {
          //   errorStr =  error.error.error.message + "\n" + except;
          // }
          // else
          //   errorStr = error.error.error + "\n" + except;

         
            let showError = AppConfig.settings.apiServer[Constants.SHOW_ERROR];
            
            console.log(showError,Constants.SHOW_ERROR);
          
        // if(showError)
        // this.toastrService.error(errorStr||errorDesc, "", { timeOut: 0 });        
           
        }
        else {
          const message = error&&error.message ? error.message : error.toString();          
          let stack = error&& error.stack.split('webpack-internal')[0];         
         let errorStr =stack;
          //this.toastrService.error(errorStr, "", { timeOut: 0 });
          //this.WriteError(error);
        }
      });
    }
    catch (err) {

    }

  }

  

  private WriteError(error: any) {

    let userId = sessionStorage.getItem("basic");
    let token = sessionStorage.getItem("userToken");
    let errorModel = {
      statusCode: error.error.status,
      statusText: error.error.statusText

        + "\r\n" + " UserId: " + userId
        + "\r\n" + " Token: " + token
        + "\r\n" + " Params: " + error.request.body
        + "\r\n" + " Message: " + error.error.message
        + "\r\n" + " MethodType: " + error.request.method

      , module: "Service ",
      url: error.url,
      errorType: " APi Error"
    };

    let serviceUrl = AppConfig.settings.apiServer["ErrorWriteService"];
    let url = serviceUrl + "Error/WriteError"
    this.httpService.postService(errorModel, url).subscribe(x => {
      console.log("Error log written in log file.");
    });
  }

  private isApiError(status: any, error: any) {
    return status == 404 || status == 500 || status == 401 || status == 0 || (error&&error.error&&error.error.message&&error.error.message.toString().includes("Http"));
  }
}


