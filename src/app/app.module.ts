import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { FormsModule } from '@angular/forms'; //Importação necessária para funcionar o ngModel
import { UppercaseDirective } from './uppercase.directive';

const appRoutes : Routes = [
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/:id', component: EditarProdutoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ProdutosComponent,
    EditarProdutoComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, //Importação necessária para funcionar o ngModel
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
