import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { FormsModule } from '@angular/forms'; //Importação necessária para funcionar o ngModel
import { UppercaseDirective } from './uppercase.directive';
import { ProdutoService } from './produto.service';

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
  /*
  outra maneira [{provider: ProdutoService, useClass: ProdutoService}]
  usado para quando quiser utilizar implementação de interface, onde a interface
  vai em "provider" e a classe que implementa essa interface seria em "useClass"
  */
  providers: [ProdutoService],//serviços 
  bootstrap: [AppComponent]
})
export class AppModule { }
