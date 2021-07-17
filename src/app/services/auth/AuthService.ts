import { BehaviorSubject, Observable } from 'rxjs';


export class AuthService{

    public token:BehaviorSubject<string>;

    constructor(){
        this.token = new BehaviorSubject(null);
    }

    public getToken():Observable<any>{
        return this.token.asObservable();
    }

    public saveToken(value:string){
        
        this.token.next(value);
    }
}