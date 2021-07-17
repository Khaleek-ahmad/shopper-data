import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })

export class AuthService {    

    private token$:BehaviorSubject<string>;

    constructor(){
        this.token$ = new BehaviorSubject('');
    }

    public getToken():Observable<any>{
        return this.token$.asObservable();
    }

    public saveToken(value:string){
        
        this.token$.next(value);
    }
 }