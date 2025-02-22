import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Exibe uma introdução e um carrossel de imagens
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: AboutComponent }, // Informações do app
  { path: 'produtos', component: ProductListComponent }, // Lista os produtos em uma tabela (colunas para nome, preço, data, etc.) com filtros e ordenação (MatSort), paginação (MatPaginator) e opções de criar, editar e remover produtos (MatDialog para confirmar ações como exclusão)
  // { path: 'produtos/formulario', component: ProductFormComponent }, // Formulário para cadastro/edição de produtos (FormGroup, FormControl, MatInput, MatDatepicker, etc.) com validações (mensagens de erro com MatError) e Snackbars para notificações de sucesso ou erro
  // { path: 'produtos/:id', component: ProductDetailComponent }, // Exibe os detalhes de um produto (usando Resolver e ActivatedRoute)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
