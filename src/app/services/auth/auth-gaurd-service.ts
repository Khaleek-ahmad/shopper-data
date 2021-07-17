import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let token = null;
    this._authService.getToken().subscribe(x => token = x);    
    if (token == null) {
      token = sessionStorage.getItem("userToken");
    }     
    if (token) {
      console.log("User permitted to access the route");
      return true;
    }    
    this._router.navigate(['/login']);    
    return false;
  }

}