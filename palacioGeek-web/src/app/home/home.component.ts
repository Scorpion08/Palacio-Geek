import { Component, OnInit } from '@angular/core';
import { CHAVE_CLIENTE } from 'src/constants/Constants';
import { Cliente } from 'src/model/cliente.model';
import Session from '../../environments/session';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Session implements OnInit {

  cliente?: Cliente;

  constructor() {
    super();
  }

  ngOnInit(): void {
    // const clienteString = localStorage.getItem(CHAVE_CLIENTE);
    // if(clienteString != null) {
    //   this.cliente = JSON.parse(clienteString);
    // }

    if(this.clienteLogado){
      alert(this.clienteLogado.nome)
    }

  }

}
