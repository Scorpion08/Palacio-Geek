import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { URL, HTTP_OPTIONS } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefaultRequestService {

  constructor(private http: HttpClient){}

  get<T>(serviceRoute: string):Observable<T>{
    return this.http.get<T>(URL + serviceRoute,HTTP_OPTIONS);
  }

  post<T>(serviceRoute: string, object: any):Observable<T>{
    return this.http.post<T>(URL + serviceRoute,object,HTTP_OPTIONS);
  }

  put<T>(serviceRoute: string, object: any):Observable<T>{
    return this.http.put<T>(URL + serviceRoute, object, HTTP_OPTIONS);
  }

  delete<T>(serviceRoute: string, id: number):Observable<T>{
    return this.http.delete<T>(URL + serviceRoute + '/' + id ,HTTP_OPTIONS);
  }
}
