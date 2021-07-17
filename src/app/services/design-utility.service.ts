import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  constructor() { }
  print(val, containerId) {
    let el = document.createElement("li");
    el.innerText = val;
    document.getElementById(containerId).append(el);
  }

  printMobNotify(val, containerId) {
    let el = document.createElement("div");
    el.setAttribute("class","item");
    el.innerHTML = val;
    document.getElementById(containerId).prepend(el);
  }

}
