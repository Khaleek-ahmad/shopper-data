import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';
import { AppConfig } from './shared/App.Config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  apiServer: any;
  constructor(private bnIdle: BnNgIdleService,
    private router: Router) { 

    if (AppConfig.settings)
      this.apiServer = AppConfig.settings.apiServer;
    let sessionTime = this.apiServer.authentication.sessionTimeOut * 60;

   
  }
}
