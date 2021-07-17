import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*
NOTE: 
1> Subject
2> BehaviorSubject
3> AsynSubject
https://www.learnrxjs.io/learn-rxjs/subjects/subject
*/

export class SubjectService {

  exclusive = new Subject<boolean>();

  // BehaviorSubject intialize the value 'saa'
  //updateUserName = new BehaviorSubject<string>('saa');
  //videoEmit = new ReplaySubject<any>(3);

  asyncVideoEmit1$ = new AsyncSubject<string>();

  private newUserName$: BehaviorSubject<string>;
  private videoEmit$: ReplaySubject<string>;
  public asyncVideoEmit$: AsyncSubject<string>

  constructor() {
    this.init();
  }

  init() {
    this.newUserName$ = new BehaviorSubject<string>('saa');
    this.videoEmit$ = new ReplaySubject<string>(3, 5000000);
    this.asyncVideoEmit$ = new AsyncSubject<string>();
  }

  // 
  saveNewUser(value: string) {
    this.newUserName$.next(value);
  }

  getNewUser(): Observable<string> {
    return this.newUserName$.asObservable();
  }
  // 
  saveVideo(value: string) {
    this.videoEmit$.next(value);
  }

  getVideo(): Observable<string> {
    return this.videoEmit$.asObservable();
  }

  // ----

  // 
  saveNewAsyncValue(value: string) {
    this.asyncVideoEmit$.next(value);
  }

  getNewAsyncValue(): Observable<string> {
    return this.asyncVideoEmit$.asObservable();
  }
  



}
