import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-falha-troca',
  templateUrl: './falha-troca.component.html',
  styleUrls: ['./falha-troca.component.css']
})
export class FalhaTrocaComponent implements OnInit {

  produto = '';

  constructor() { }



  ngOnInit(): void {

    const produto = 'Caneca Bob Esponja';

    this.produto = produto;

  }

}
