import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule',  canActivate: [LoggedGuard]  },
  { path: 'estoque', loadChildren: './estoque/estoque.module#EstoquePageModule', canActivate: [AuthGuard] },
  { path: 'cadastrar-produto', loadChildren: './cadastrar-produto/cadastrar-produto.module#CadastrarProdutoPageModule' },  { path: 'criar-usuario', loadChildren: './criar-usuario/criar-usuario.module#CriarUsuarioPageModule' },
  { path: 'modificar-produto', loadChildren: './modificar-produto/modificar-produto.module#ModificarProdutoPageModule' },
  { path: 'venda', loadChildren: './venda/venda.module#VendaPageModule' },
  { path: 'modal-vender-produto', loadChildren: './modal-vender-produto/modal-vender-produto.module#ModalVenderProdutoPageModule' },
  { path: 'vendas-controle', loadChildren: './vendas-controle/vendas-controle.module#VendasControlePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
