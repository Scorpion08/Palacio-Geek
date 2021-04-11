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
import { LoginComponent } from '../app/componentes usuario/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroClienteComponent } from '../app/componentes cliente/cadastro-cliente/cadastro-cliente.component';
import { DefaultRequestService } from '../service/default-request.service';
import { AdminComponent } from './componentes admin/admin/admin.component';
import { AlterarProdutoComponent } from '../app/componentes produtos/alterar-produto/alterar-produto.component';
import { RemoverProdutoComponent } from '../app/componentes produtos/remover-produto/remover-produto.component';
import { EditarProdutoComponent } from './componentes produtos/editar-produto/editar-produto.component';
import { GraficoVendasComponent } from './componentes admin/grafico-vendas/grafico-vendas.component';
import { CadastrarCartaoComponent } from '../app/componentes compra/cadastrar-cartao/cadastrar-cartao.component';
import { CadastrarProdutoComponent } from '../app/componentes produtos/cadastrar-produto/cadastrar-produto.component';
import { CarrinhoComponent } from '../app/componentes compra/carrinho/carrinho.component';
import { CartoesCadastradosComponent } from '../app/componentes compra/cartoes-cadastrados/cartoes-cadastrados.component';
import { EnderecoComponent } from './componentes cliente/endereco/endereco.component';
import { EnderecosCadastradosComponent } from '../app/componentes cliente/enderecos-cadastrados/enderecos-cadastrados.component';
import { EsqueceuSenhaComponent } from '../app/componentes usuario/esqueceu-senha/esqueceu-senha.component';
import { FormaDePagamentoComponent } from '../app/componentes compra/forma-de-pagamento/forma-de-pagamento.component';
import { InserirProdutoComponent } from '../app/componentes produtos/inserir-produto/inserir-produto.component';
import { MeusPedidosComponent } from './componentes pedidos/meus-pedidos/meus-pedidos.component';
import { MinhaContaComponent } from '../app/componentes usuario/minha-conta/minha-conta.component';
import { PedidoFinalizadoComponent } from '../app/componentes compra/pedido-finalizado/pedido-finalizado.component';
import { SelecionarFreteComponent } from '../app/componentes compra/selecionar-frete/selecionar-frete.component';
import { TrocaComponent } from './componentes troca/troca/troca.component';
import { UsuarioLogadoComponent } from './componentes cliente/usuario-logado/usuario-logado.component';
import { AlterarClienteComponent } from '../app/componentes cliente/alterar-cliente/alterar-cliente.component';
import { CadastroClienteService } from '../app/componentes cliente/cadastro-cliente/cadastro-cliente.service';
import { PagamentoConfirmadoComponent } from '../app/componentes compra/pagamento-confirmado/pagamento-confirmado.component';
import { TrocaTransitoComponent } from '../app/componentes troca/troca-transito/troca-transito.component';
import { GerarCupomComponent } from './componentes admin/gerar-cupom/gerar-cupom.component';
import { AlterarCartaoComponent } from './componentes compra/alterar-cartao/alterar-cartao.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ProdutosInativadosComponent } from './produtos-inativados/produtos-inativados.component';
import { SolicitarDevolucaoComponent } from '../app/componentes devolucao/solicitar-devolucao/solicitar-devolucao.component';
import { DevolucaoEstoqueComponent } from '../app/componentes devolucao/devolucao-estoque/devolucao-estoque.component';
import { DevolucaoTransitoComponent } from '../app/componentes devolucao/devolucao-transito/devolucao-transito.component';
import { PedidosEntreguesComponent } from '../app/componentes pedidos/pedidos-entregues/pedidos-entregues.component';
import { PedidosPendentesComponent } from '../app/componentes pedidos/pedidos-pendentes/pedidos-pendentes.component';
import { PedidosTransitoComponent } from '../app/componentes pedidos/pedidos-transito/pedidos-transito.component';
import { TicketDevolucaoComponent } from '../app/componentes devolucao/ticket-devolucao/ticket-devolucao.component';
import { ListaTicketComponent } from './lista-ticket/lista-ticket.component';
import { TicketTrocaComponent } from './componentes troca/ticket-troca/ticket-troca.component';
import { TrocaPendenteComponent } from './componentes troca/troca-pendente/troca-pendente.component';
import { PendenteRecebimentoComponent } from '../app/componentes troca/pendente-recebimento/pendente-recebimento.component';
import { PendenteAprovacaoComponent } from './componentes devolucao/pendente-aprovacao/pendente-aprovacao.component';
import { ConfirmarPedidoComponent } from './confirmar-pedido/confirmar-pedido.component';
import { ClienteTrocaComponent } from './cliente-troca/cliente-troca.component';
import { ClienteDevolucaoComponent } from './cliente-devolucao/cliente-devolucao.component';
import { ClientesAtivosComponent } from './clientes-ativos/clientes-ativos.component';
import { TelaErroComponent } from './tela-erro/tela-erro.component';
import { FalhaTrocaComponent } from './falha-troca/falha-troca.component';





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
    GerarCupomComponent,
    AlterarCartaoComponent,
    EstoqueComponent,
    ProdutosInativadosComponent,
    SolicitarDevolucaoComponent,
    DevolucaoEstoqueComponent,
    DevolucaoTransitoComponent,
    PedidosEntreguesComponent,
    PedidosPendentesComponent,
    PedidosTransitoComponent,
    TicketDevolucaoComponent,
    ListaTicketComponent,
    TicketTrocaComponent,
    TrocaPendenteComponent,
    PendenteRecebimentoComponent,
    PendenteAprovacaoComponent,
    ConfirmarPedidoComponent,
    ClienteTrocaComponent,
    ClienteDevolucaoComponent,
    ClientesAtivosComponent,
    TelaErroComponent,
    FalhaTrocaComponent
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
