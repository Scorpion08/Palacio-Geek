import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultRequestService } from '../../service/default-request.service';
import { Cliente } from '../../model/cliente.model';
import { Resultado } from 'src/model/resultado.model';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public clientes: Cliente[] = [];

  public menssagensDeErro: string[] = [];

  constructor(private httpClientDefault: DefaultRequestService,
    private router: Router) { }




  ngOnInit(): void {
  this.enviaRequisicaoConsulta();

  }


  enviaRequisicaoConsulta() {
    this.menssagensDeErro = [];
    this.httpClientDefault.get<Resultado<Cliente>>('/clientes').subscribe(resultado =>{
      if(resultado?.msg == null){
        this.clientes = resultado.entidades;
      }else{
        this.menssagensDeErro = resultado.msg.split(".");
      }
    }, erro => {
        alert("Deu erro");
    });

  }


  inativarConta(cliente: Cliente) {
    this.menssagensDeErro = [];
    this.httpClientDefault.delete<Resultado<Usuario>>('/usuarios', cliente.usuario!.id! ).subscribe(resultado =>{
      if(resultado?.msg == null){
        cliente.usuario = resultado.entidades[0];
      }else{
        this.menssagensDeErro = resultado.msg.split(".");
      }
    }, erro => {
        alert("Deu erro");
    });

}
}
