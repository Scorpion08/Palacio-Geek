import { Component, OnInit } from '@angular/core';
import Documento from 'src/model/Documento.model';
import { Usuario } from 'src/model/usuario.model';
import { Cliente } from '../../../model/cliente.model';
import { DefaultRequestService } from '../../../service/default-request.service';
import { Router } from '@angular/router';
import { Estado } from '../../../model/Estado.model';
import { Resultado } from 'src/model/resultado.model';
import { Cidade } from '../../../model/Cidade.model';
import { Endereco } from 'src/model/Endereco.model';
import { TipoEndereco } from 'src/model/TipoEndereco.model';
import { TipoDocumento } from '../../../model/TipoDocumento.model';
import { CadastroClienteService } from '../cadastro-cliente/cadastro-cliente.service';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.component.html',
  styleUrls: ['./alterar-cliente.component.css']
})
export class AlterarClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  public tipoDocumentos: TipoDocumento[] = [];

  public tipoDocumento: TipoDocumento = new TipoDocumento();
  public documento: Documento = new Documento();

  public menssagensDeErro: string[] = [];

  constructor(private httpClientDefault: DefaultRequestService,
              private httpCadastroCliente: CadastroClienteService,
              private router: Router) { }

  ngOnInit(): void {
    // this.cliente = JSON.parse(sessionStorage.getItem("cliente")!);
    this.getCliente();
  }

  getCliente() {
    this.httpClientDefault.get<Resultado<Cliente>>("clientes/1").subscribe(resultado => {
      if(resultado.msg == null) {
        this.cliente = resultado.entidades[0];
        this.documento = this.cliente.documentos![0];
      }
      this.getTipoDocumento();
    });
  }

  getTipoDocumento() {
    this.httpClientDefault.get<Resultado<TipoDocumento>>('/tipodocumentos').subscribe( resultado => {
      if(resultado?.msg == null) {
        resultado!.entidades.forEach( tipoDocumentos => this.tipoDocumentos.push(tipoDocumentos));
      } else {
        alert(resultado?.msg);
      }
    }, erro => {
      alert("Falha ao realizar comunicação com o servidor");
    });
  }

  atualizaCliente() {
    this.montaCliente();
    this.enviaRequisicaoCadastro();
    console.log(this.cliente);
  }

  montaCliente() {
    this.documento.tipoDocumento = this.tipoDocumento;
    this.cliente.documentos?.pop();
    this.cliente.documentos?.push(this.documento);
  }

  enviaRequisicaoCadastro() {
    this.menssagensDeErro = [];
    this.httpClientDefault.put<Resultado<Cliente>>('/clientes', this.cliente).subscribe(resultado =>{
      if(resultado?.msg == null){
        this.router.navigate(['./login']);
      }else{
        this.menssagensDeErro = resultado.msg.split(".");
      }
    } , erro => {
      alert("Deu erro");
    });
  }
}
