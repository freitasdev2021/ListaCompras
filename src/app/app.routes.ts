import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lista-compras',
    loadComponent: () => import('./lista-compras/lista-compras.page').then( m => m.ListaComprasPage)
  },
  {
    path: 'novo-item',
    loadComponent: () => import('./novo-item/novo-item.page').then( m => m.NovoItemPage)
  },
  {
    path: 'relatorios',
    loadComponent: () => import('./relatorios/relatorios.page').then( m => m.RelatoriosPage)
  },
  {
    path: 'baixa-item',
    loadComponent: () => import('./baixa-item/baixa-item.page').then( m => m.BaixaItemPage)
  },
  {
    path: 'adicionar-compras',
    loadComponent: () => import('./adicionar-compras/adicionar-compras.page').then( m => m.AdicionarComprasPage)
  },
  {
    path: 'itens-lista-compras',
    loadComponent: () => import('./itens-lista-compras/itens-lista-compras.page').then( m => m.ItensListaComprasPage)
  },
];
