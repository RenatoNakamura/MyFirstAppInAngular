import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto;
  
  //Entra em ação o injetor de dependência do Angular
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Para ter acesso ao parametro informado na rota
    this.produto = new Produto();
    this.produto.id = 1;
    this.produto.nome = "Macarrão com queijo";
  }

  change(){
    alert("Change!!!");
  }

  salvar(){
    alert(this.produto.nome);
  }

  get debug(){
    return JSON.stringify(this.produto);
  }

}
