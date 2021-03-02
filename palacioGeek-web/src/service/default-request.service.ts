import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../model/Usuario.model';
import {HttpHeaders} from '@angular/common/http';
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
}
