import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultRequestService } from '../../../service/default-request.service';
import { Resultado } from '../../../model/resultado.model';
import { Cliente } from '../../../model/cliente.model';
import { CHAVE_CLIENTE } from '../../../constants/Constants';
import { Usuario } from 'src/model/usuario.model';
import DefaultComponent from '../../default.component';
import { element } from 'protractor';
import { Login } from '../../../model/login';
import { LoginService } from '../../../service/login.service';

import * as angular from 'angular';
//import * as angular from 'angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends DefaultComponent implements OnInit {
  public menssagensDeErro: string[] = [];

  usuario: Usuario = new Usuario();
  cliente: Cliente = new Cliente();

  constructor(
    private httpClient: DefaultRequestService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {}

  logar() {
    console.log(this.usuario);


    this.httpClient
      .post<Resultado<Usuario>>('login', this.usuario)
      .subscribe((resultado) => {
        if (resultado?.msg?.length == 0) {
          const usuario: Usuario = resultado.entidades[0];
          if(usuario.tipoUsuario?.id == 1){
            this.router.navigate(['/admin']);
          }else{
            this.router.navigate(['/home']);
          }

        }  else {
          alert('Login/Senha Inválidos!');
        }
      });
  }

  /*validaLogin(){
    this.httpClient.post<Resultado<Cliente>>('/login', this.usuario).subscribe(resultado => {
      if(resultado?.msg == null){
        console.log(resultado.entidades[0]);
        this.clienteLogado = resultado.entidades[0];
        this.router.navigate(['/home'])
      }else{
        this.menssagensDeErro = resultado.msg.split(".");
      }
    },erro => {
      alert('Requisição com erro ' )
    })
  }*/
}
