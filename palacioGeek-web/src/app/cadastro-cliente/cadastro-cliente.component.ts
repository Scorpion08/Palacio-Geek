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
import { TipoEndereco } from 'src/model/TipoEndereco.model';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  public estados: Estado[] = [];
  public cidades: Cidade[] = [];
  public tipoEnderecos: TipoEndereco[] = [];

  public estado: Estado = new Estado();
  public cidade: Cidade = new Cidade();
  public tipoEndereco: TipoEndereco = new TipoEndereco();

  constructor(private httpClientDefault: DefaultRequestService,
              private httpCadastroCliente: CadastroClienteService,
              private router: Router) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente.usuario = new Usuario();
    this.cliente.documentos = [];
    this.cliente.endereco = new Endereco();
    this.cliente.endereco.cidade = new Cidade();
    this.cliente.endereco.cidade.estado = new Estado();
    this.getTipoEndereco();
  }

  getTipoEndereco() {
    this.httpClientDefault.get<Resultado<TipoEndereco>>('/tipoenderecos').subscribe( resultado => {
      if(resultado?.msg == null) {
        resultado!.entidades.forEach( tipoEndereco => this.tipoEnderecos.push(tipoEndereco));
        this.getEstados();
      } else {
        alert(resultado?.msg);
      }
    }, erro => {
      alert("Falha ao realizar comunicação com o servidor");
    });
  }

  getEstados(){
    this.httpClientDefault.get<Resultado<Estado>>('/estados').subscribe( resultado => {
      console.log(resultado);
      if(resultado?.msg == null) {
        this.estados = resultado.entidades;
        this.getCidades();
      } else {
        alert(resultado?.msg);
      }
    }, erro => {
      alert("Falha ao realizar comunicação com o servidor");
    });
  }

  getCidades(){
    this.httpClientDefault.get<Resultado<Cidade>>('/cidades').subscribe( resultado => {
      console.log(resultado);
      if(resultado?.msg == null) {
        this.cidades = resultado.entidades;
      } else {
        alert(resultado?.msg);
      }
    }, erro => {
      alert("Falha ao realizar comunicação com o servidor");
    })
  }

  getCidadesDoEstado(): Cidade[]{
    return this.cidades.filter(cidade => cidade.estado?.id === this.estado.id);
  }

  cadastraCliente() {
    this.cidade.estado = this.estado;
    this.cliente!.endereco!.cidade = this.cidade;
    this.cliente!.endereco!.tipoEndereco = this.tipoEndereco;
    console.log(this.cliente);
  }

}
