import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url:string ='';

  myObservable$!:Observable<string>;

  constructor(private httpClient: HttpClient) {}

  getData():void {
    this.myObservable$ = of('test');
  }
}
