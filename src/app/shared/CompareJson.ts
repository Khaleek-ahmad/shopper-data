import { AppConfig } from './App.Config';
import { HttpService } from './HttpService';
//import * as _ from 'lodash';

export class CompareJSON{

    constructor(private httpClient:HttpService){

    }

    private differences:any;

  public  compareJonFile(firstJsonFilePath,secondJsonObject,compareFirstToSec:boolean) {

    return new Promise((resolve,reject)=>{

      this.httpClient.getService(firstJsonFilePath,null).subscribe(x => {

        

        let diff: any[] = this.compareJSONObjects(x.body, secondJsonObject,compareFirstToSec);

        

        // console.log("FirstJson",x);
        // console.log("SecondJson",secondJsonObject);

        let differences = diff.join(",");
        resolve(differences);
      });
      // this.httpClient.getService("assets/configurables/config.deploy.json",null).subscribe(x => {
      //   let diff: any[] = this.compareJSONObjects(x, AppConfig.settings);
      //   let differences = diff.join(",");
      //   resolve(differences);
      // });

    })
    
}
    
      private compareJSONObjects(firstJson: Object, secondJson: Object,comareFirstToSec:boolean): string[] {    
        let differences: string[] = [];   

        // let sample1 ={abc:1};
        // let sample2 ={abc:1}

        // if(_.isEqual(sample1, sample2))
        //   return differences;

       //sha this.compareJSONProperties(firstJson, secondJson, differences,comareFirstToSec);
        return differences;    
      }
    
      
      private compareJSONProperties(firstJson: Object, secondJson: Object, differences: any,compareFirstToSec:boolean) {
    
        let firstJsonLength = Object.keys(firstJson).length;    
        let secondJsonLength = Object.keys(secondJson).length;
        let newFirstObject: Object=firstJson;    
        let newSecondObject: Object= secondJson;
        
        if(compareFirstToSec==false){
          if (firstJsonLength >= secondJsonLength) { 
            newFirstObject = firstJson;    
            newSecondObject = secondJson;    
          } else {    
            newFirstObject = secondJson;    
            newSecondObject = firstJson;    
          }
        }
        
        for (var prop in newFirstObject) {    
          if (newSecondObject.hasOwnProperty(prop)) {    
            if (typeof (newFirstObject[prop]) == "object") {    
              this.compareJSONProperties(newFirstObject[prop], newSecondObject[prop], differences,compareFirstToSec);    
            }    
          }
    
          else {    
            differences.push(prop);    
          }    
        }    
      }      
}