import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GenericModule } from './generic/generic.module';
import { HttpService } from './shared/HttpService';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
import { AppConfig } from './shared/App.Config';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalErrorHandler } from './shared/ErrorHandler';
import { AuthService } from './services/auth/AuthService';
import { AuthGuard } from './services/auth/auth-gaurd-service';
import { authInterceptorProviders } from './services/auth.interceptor';
export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule    
  
  ],
  providers: [HttpService,
    authInterceptorProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    },
    // {
    //   provide: ErrorHandler,
    //   useClass: GlobalErrorHandler
    // },
    AuthService,
    AuthGuard
   
  ],
  bootstrap: [AppComponent],
  exports:[],
  entryComponents:[]
})
export class AppModule { }
