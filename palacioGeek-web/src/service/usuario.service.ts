import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../model/usuario.model';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url:string="http://localhost:3000/validaLogin";
  constructor(private http: HttpClient){}

  validaLogin(usuario: Usuario):Observable<any>{
    return this.http.get(this.url,HTTP_OPTIONS);
  }
}
