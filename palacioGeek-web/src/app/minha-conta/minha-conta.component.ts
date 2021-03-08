import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente.model';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  public cliente?: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
