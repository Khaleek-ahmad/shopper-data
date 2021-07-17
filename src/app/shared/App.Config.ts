import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAppConfig } from './IAppConfig';

@Injectable()
export class AppConfig {
    static settings: any;   
    constructor(private http: HttpClient) { }
    load() {

        const jsonFile = `assets/configurables/config.${environment.name}.json`;      
        return this.http.get(jsonFile).toPromise()
            .then((response) => {
                AppConfig.settings = <IAppConfig>response;
            });
    }   

   
}
