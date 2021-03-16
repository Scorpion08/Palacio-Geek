import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { DefaultRequestService } from '../service/default-request.service';
import { AdminComponent } from './admin/admin.component';
import { AlterarProdutoComponent } from './alterar-produto/alterar-produto.component';
import { RemoverProdutoComponent } from './remover-produto/remover-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { GraficoVendasComponent } from './grafico-vendas/grafico-vendas.component';
import { CadastrarCartaoComponent } from './cadastrar-cartao/cadastrar-cartao.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CartoesCadastradosComponent } from './cartoes-cadastrados/cartoes-cadastrados.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { EnderecosCadastradosComponent } from './enderecos-cadastrados/enderecos-cadastrados.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { FormaDePagamentoComponent } from './forma-de-pagamento/forma-de-pagamento.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { PedidoFinalizadoComponent } from './pedido-finalizado/pedido-finalizado.component';
import { SelecionarFreteComponent } from './selecionar-frete/selecionar-frete.component';
import { TrocaComponent } from './troca/troca.component';
import { UsuarioLogadoComponent } from './usuario-logado/usuario-logado.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { CadastroClienteService } from './cadastro-cliente/cadastro-cliente.service';
import { PagamentoConfirmadoComponent } from './pagamento-confirmado/pagamento-confirmado.component';
import { TrocaTransitoComponent } from './troca-transito/troca-transito.component';
import { GerarCupomComponent } from './gerar-cupom/gerar-cupom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    CadastroClienteComponent,
    AdminComponent,
    AlterarProdutoComponent,
    RemoverProdutoComponent,
    EditarProdutoComponent,
    GraficoVendasComponent,
    CadastrarCartaoComponent,
    CadastrarProdutoComponent,
    CarrinhoComponent,
    CartoesCadastradosComponent,
    EnderecoComponent,
    EnderecosCadastradosComponent,
    EsqueceuSenhaComponent,
    FormaDePagamentoComponent,
    InserirProdutoComponent,
    MeusPedidosComponent,
    MinhaContaComponent,
    PedidoFinalizadoComponent,
    SelecionarFreteComponent,
    TrocaComponent,
    UsuarioLogadoComponent,
    AlterarClienteComponent,
    PagamentoConfirmadoComponent,
    TrocaTransitoComponent,
    GerarCupomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DefaultRequestService, CadastroClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
