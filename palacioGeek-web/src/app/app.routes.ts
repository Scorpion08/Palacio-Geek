import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { AdminComponent } from './admin/admin.component';
import { AlterarProdutoComponent } from './alterar-produto/alterar-produto.component';
import { RemoverProdutoComponent } from './remover-produto/remover-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { GraficoVendasComponent } from './grafico-vendas/grafico-vendas.component';
import { CadastrarCartaoComponent } from './cadastrar-cartao/cadastrar-cartao.component';
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

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro_cliente' , component: CadastroClienteComponent},
  { path: 'admin' , component: AdminComponent},
  { path: 'alterar_cliente', component: AlterarClienteComponent},
  { path: 'alterar_produto' , component: AlterarProdutoComponent},
  { path: 'remover_produto' , component: RemoverProdutoComponent},
  { path: 'editar_produto' , component: EditarProdutoComponent},
  { path: 'grafico_vendas' , component: GraficoVendasComponent},
  { path: 'cadastrar_cartao' , component: CadastrarCartaoComponent},
  { path: 'cadastrar_produto' , component: CadastrarProdutoComponent},
  { path: 'carrinho' , component: CarrinhoComponent},
  { path: 'cartoes_cadastrados' , component: CartoesCadastradosComponent},
  { path: 'endereco' , component: EnderecoComponent},
  { path: 'enderecos_cadastrados' , component: EnderecosCadastradosComponent},
  { path: 'esqueceu_senha' , component: EsqueceuSenhaComponent},
  { path: 'forma_de_pagamento' , component: FormaDePagamentoComponent},
  { path: 'inserir_produto' , component: InserirProdutoComponent},
  { path: 'meus_pedidos' , component: MeusPedidosComponent},
  { path: 'minha_conta' , component: MinhaContaComponent},
  { path: 'pedido_finalizado' , component: PedidoFinalizadoComponent},
  { path: 'selecionar_frete' , component: SelecionarFreteComponent},
  { path: 'troca' , component: TrocaComponent},
  { path: 'usuario_logado' , component: UsuarioLogadoComponent}


];
