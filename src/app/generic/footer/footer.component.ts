import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/shared/App.Config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private apiServer: any;
  appVersion: any;

    constructor() {
        if (AppConfig.settings)
            this.apiServer = AppConfig.settings.apiServer;
    }

  ngOnInit() {
    this.appVersion=this.apiServer.version.appVersion;
    // console.log("application version ",this.appVersion);
  }

}
