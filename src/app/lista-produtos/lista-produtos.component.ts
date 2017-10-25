import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  //@Input informa que eh um atributo de entrada, para quando alguem utilizar esse componente saber que eh necessário atribuir uma lista de produtos
  @Input() produtosNoComponenteListaProdutos : Produto[] = [];

  constructor() { }

  ngOnInit() {
  
  }

}
