import { Component, OnInit } from '@angular/core';
import Documento from 'src/model/Documento.model';
import { Usuario } from 'src/model/Usuario.model';
import { Cliente } from '../../model/Cliente.model';
import { DefaultRequestService } from '../../service/default-request.service';
import { CadastroClienteService } from './cadastro-cliente.service';
import { Router } from '@angular/router';
import { Estado } from '../../model/Estado.model';
import { Resultado } from 'src/model/resultado.model';
import { Cidade } from '../../model/Cidade.model';
import { Endereco } from 'src/model/Endereco.model';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  public estados: Estado[] = [];
  public cidades: Cidade[] = [];

  constructor(private httpClientDefault: DefaultRequestService,
              private httpCadastroCliente: CadastroClienteService,
              private router: Router) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente.usuario = new Usuario();
    this.cliente.documento = new Documento();
    this.cliente.endereco = new Endereco();
    this.cliente.endereco.cidade = new Cidade();
    this.cliente.endereco.cidade.estado = new Estado();
    this.getEstados();
  }

  getEstados(){
    this.httpClientDefault.get<Resultado<Estado>>('/estados').subscribe( resultado => {
      if(resultado?.msg?.length == 0) {
        this.estados = resultado.entidades;
      } else {
        alert(resultado?.msg);
      }
    }, erro => {
      alert("Falha ao realizar comunicação com o servidor");
    })
  }

  getCidades(){
    this.httpClientDefault.get<Resultado<Cidade>>('/cidades').subscribe( resultado => {
      if(resultado?.msg?.length == 0) {
        this.cidades = resultado.entidades;
      } else {
        alert(resultado?.msg);
      }
    }, erro => {
      alert("Falha ao realizar comunicação com o servidor");
    })
  }



  cadastraCliente() {
    console.log(this.cliente);
    console.log(this.documento);
    console.log(this.usuario);
  }

}
