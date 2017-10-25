import { Component, OnInit } from '@angular/core';
import { Produto } from "../produto"

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos : Produto[] = [];

  constructor() { }

  ngOnInit() {
    let p1 = new Produto();
    p1.id = 1;
    p1.nome = "Coca Cola";
    this.produtos.push(p1);

    let p2 = new Produto();
    p2.id = 2;
    p2.nome = "Fanta";
    this.produtos.push(p2);
  }

}
