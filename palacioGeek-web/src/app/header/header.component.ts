import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente.model';
import { CHAVE_CLIENTE } from '../../constants/Constants';
import { DefaultComponent } from '../default.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends DefaultComponent implements OnInit {

  cliente?: Cliente;

  constructor() {
    super();
  }

  ngOnInit(): void {
    const clienteString = localStorage.getItem(CHAVE_CLIENTE);
    if(clienteString != null) {
      this.cliente = JSON.parse(clienteString);
    }
  }
}
