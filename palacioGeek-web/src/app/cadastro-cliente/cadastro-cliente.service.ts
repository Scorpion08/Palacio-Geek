import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../../model/Usuario.model';
import {  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_OPTIONS, URL } from '../../environments/environment';
import { Cliente } from '../../model/Cliente.model';



@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  constructor(private httpClient: HttpClient){}

  cadastraCliente(cliente: Cliente) : Observable<any> {
    return this.httpClient.post<any>(URL + 'clientes', HTTP_OPTIONS);
  }

}
