import { Component } from '@angular/core';
import { Produto } from './produto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtosNoComponenteRaiz : Produto[] = [];
  title = 'app';

  constructor(){
    let produto = new Produto();
    produto.id = 1;
    produto.nome = "Iphone X";
    this.produtosNoComponenteRaiz.push(produto);
  }
}
