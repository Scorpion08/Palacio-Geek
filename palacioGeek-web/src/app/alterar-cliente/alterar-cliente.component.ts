import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/model/Cidade.model';
import { Cliente } from 'src/model/Cliente.model';
import  Documento from 'src/model/Documento.model';
import { Endereco } from 'src/model/Endereco.model';
import { Estado } from 'src/model/Estado.model';
import { Usuario } from 'src/model/Usuario.model';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.component.html',
  styleUrls: ['./alterar-cliente.component.css']
})
export class AlterarClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  constructor() { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente.usuario = new Usuario();
    this.cliente.documentos = [];
    this.cliente.endereco = new Endereco();
    this.cliente.endereco.cidade = new Cidade();
    this.cliente.endereco.cidade.estado = new Estado();
  }

  cadastraCliente() {
    console.log(this.cliente);
  }

}
