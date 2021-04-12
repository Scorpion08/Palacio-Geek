import { CadastrarProdutoComponent } from '../app/componentes produtos/cadastrar-produto/cadastrar-produto.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/componentes usuario/login/login.component';
import { CadastroClienteComponent } from '../app/componentes cliente/cadastro-cliente/cadastro-cliente.component';
import { AdminComponent } from './componentes admin/admin/admin.component';
import { AlterarProdutoComponent } from '../app/componentes produtos/alterar-produto/alterar-produto.component';
import { RemoverProdutoComponent } from '../app/componentes produtos/remover-produto/remover-produto.component';
import { EditarProdutoComponent } from './componentes produtos/editar-produto/editar-produto.component';
import { GraficoVendasComponent } from './componentes admin/grafico-vendas/grafico-vendas.component';
import { CadastrarCartaoComponent } from '../app/componentes compra/cadastrar-cartao/cadastrar-cartao.component';
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
import { PagamentoConfirmadoComponent } from '../app/componentes compra/pagamento-confirmado/pagamento-confirmado.component';
import { TrocaTransitoComponent } from '../app/componentes troca/troca-transito/troca-transito.component';
import { AlterarClienteComponent } from '../app/componentes cliente/alterar-cliente/alterar-cliente.component';
import { GerarCupomComponent } from './componentes admin/gerar-cupom/gerar-cupom.component';
import { AlterarCartaoComponent } from './componentes compra/alterar-cartao/alterar-cartao.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ProdutosInativadosComponent } from './produtos-inativados/produtos-inativados.component';
import { DevolucaoEstoqueComponent } from '../app/componentes devolucao/devolucao-estoque/devolucao-estoque.component';
import { DevolucaoTransitoComponent } from '../app/componentes devolucao/devolucao-transito/devolucao-transito.component';
import { PedidosEntreguesComponent } from '../app/componentes pedidos/pedidos-entregues/pedidos-entregues.component';
import { PedidosPendentesComponent } from '../app/componentes pedidos/pedidos-pendentes/pedidos-pendentes.component';
import { PedidosTransitoComponent } from '../app/componentes pedidos/pedidos-transito/pedidos-transito.component';
import { TicketDevolucaoComponent } from '../app/componentes devolucao/ticket-devolucao/ticket-devolucao.component';
import { ListaTicketComponent } from './lista-ticket/lista-ticket.component';
import { TicketTrocaComponent } from '../app/componentes troca/ticket-troca/ticket-troca.component';
import { TrocaPendenteComponent } from '../app/componentes troca/troca-pendente/troca-pendente.component';
import { PendenteRecebimentoComponent } from '../app/componentes troca/pendente-recebimento/pendente-recebimento.component';
import { ClienteTrocaComponent } from './cliente-troca/cliente-troca.component';
import { ClienteDevolucaoComponent } from './cliente-devolucao/cliente-devolucao.component';
import { SolicitarDevolucaoComponent } from './componentes devolucao/solicitar-devolucao/solicitar-devolucao.component';
import { ClientesAtivosComponent } from './clientes-ativos/clientes-ativos.component';
import { TelaErroComponent } from './tela-erro/tela-erro.component';
import { FalhaTrocaComponent } from './falha-troca/falha-troca.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro_cliente', component: CadastroClienteComponent },
  { path: 'alterar_cliente', component: AlterarClienteComponent },
  { path: 'admin', component: AdminComponent , children: [
    {path: '', redirectTo: 'clientes_ativos', pathMatch: 'full'},
    { path: 'grafico_vendas', component: GraficoVendasComponent },
    { path: 'pedidos_entregues', component: PedidosEntreguesComponent },
    { path: 'pedidos_pendentes', component: PedidosPendentesComponent },
    { path: 'pedidos_transito', component: PedidosTransitoComponent },
    { path: 'produtos_inativados', component: ProdutosInativadosComponent },
    { path: 'clientes_ativos' , component: ClientesAtivosComponent},
    { path: 'cadastrar_produto', component: CadastrarProdutoComponent },
    { path: 'gerar_cupom', component: GerarCupomComponent },
    { path: 'devolucao_estoque', component: DevolucaoEstoqueComponent },
    { path: 'devolucao_transito', component: DevolucaoTransitoComponent },
    { path: 'troca_pendente', component: TrocaPendenteComponent },
    { path: 'pendente_recebimento', component: PendenteRecebimentoComponent },
    { path: 'lista_ticket', component: ListaTicketComponent },
    { path: 'ticket_troca', component: TicketTrocaComponent }

  ]},
  { path: 'alterar_produto', component: AlterarProdutoComponent },
  { path: 'remover_produto', component: RemoverProdutoComponent },
  { path: 'editar_produto', component: EditarProdutoComponent },
  { path: 'cadastrar_cartao', component: CadastrarCartaoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'cartoes_cadastrados', component: CartoesCadastradosComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: 'enderecos_cadastrados', component: EnderecosCadastradosComponent },
  { path: 'esqueceu_senha', component: EsqueceuSenhaComponent },
  { path: 'forma_de_pagamento', component: FormaDePagamentoComponent },
  { path: 'inserir_produto', component: InserirProdutoComponent },
  { path: 'meus_pedidos', component: MeusPedidosComponent },
  { path: 'minha_conta', component: MinhaContaComponent },
  { path: 'pedido_finalizado', component: PedidoFinalizadoComponent },
  { path: 'selecionar_frete', component: SelecionarFreteComponent },
  { path: 'troca', component: TrocaComponent },
  { path: 'usuario_logado', component: UsuarioLogadoComponent },
  { path: 'pagamento_confirmado', component: PagamentoConfirmadoComponent },
  { path: 'troca_transito', component: TrocaTransitoComponent },
  { path: 'alterar_cartao', component: AlterarCartaoComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'produtos-inativos', component: ProdutosInativadosComponent },
  { path: 'alterar_cartao', component: AlterarCartaoComponent },
  { path: 'alterar_cartao', component: AlterarCartaoComponent },
  { path: 'ticket_devolucao', component: TicketDevolucaoComponent },
  { path: 'troca_cliente', component: ClienteTrocaComponent },
  { path: 'devolucao_cliente', component: ClienteDevolucaoComponent },
  { path: 'solicitar_devolucao', component: SolicitarDevolucaoComponent },
  { path: 'tela_erro', component: TelaErroComponent },
  {path: 'falha_troca', component: FalhaTrocaComponent}

];
