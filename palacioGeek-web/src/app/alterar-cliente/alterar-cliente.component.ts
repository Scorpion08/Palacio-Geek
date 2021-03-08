import { Component, OnInit } from '@angular/core';
import Documento from 'src/model/Documento.model';
import { Usuario } from 'src/model/Usuario.model';
import { Cliente } from '../../model/Cliente.model';
import { DefaultRequestService } from '../../service/default-request.service';
import { Router } from '@angular/router';
import { Estado } from '../../model/Estado.model';
import { Resultado } from 'src/model/resultado.model';
import { Cidade } from '../../model/Cidade.model';
import { Endereco } from 'src/model/Endereco.model';
import { TipoEndereco } from 'src/model/TipoEndereco.model';
import { TipoDocumento } from '../../model/TipoDocumento.model';
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
    // this.cliente = new Cliente();
    // this.cliente.usuario = new Usuario();
    // this.cliente.documentos = [];
    // this.cliente.enderecos = [];
    // this.endereco = new Endereco();
    // this.endereco.cidade = new Cidade();
    // this.endereco.cidade.estado = new Estado();
    this.cliente = JSON.parse(sessionStorage.getItem("cliente")!);
    this.getTipoDocumento();
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
