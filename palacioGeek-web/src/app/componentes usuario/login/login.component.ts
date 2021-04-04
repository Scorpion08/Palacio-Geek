import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultRequestService } from '../../../service/default-request.service';
import { Resultado } from '../../../model/resultado.model';
import { Cliente } from '../../../model/cliente.model';
import { CHAVE_CLIENTE } from '../../../constants/Constants';
import { Usuario } from 'src/model/usuario.model';
import DefaultComponent from '../../default.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends DefaultComponent implements OnInit {

  public menssagensDeErro: string[] = [];

  usuario: Usuario = new Usuario();

  constructor(private httpClient : DefaultRequestService, private router: Router) {
    super();
  }

  ngOnInit(): void {

  }

  validaLogin(){
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
  }

}
