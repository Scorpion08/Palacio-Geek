import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cliente?: Cliente;

  constructor() { }

  ngOnInit(): void {
    this.cliente = JSON.parse(sessionStorage.getItem("cliente")!)
  }

}
