import { Produto } from './produto';
import { Injectable } from '@angular/core';

@Injectable()// para utilizar o servico de injeção de dependência do angular, para que nao seja necessario instanciar pelo "new" e sim pelo construtor
export class ProdutoService {
    getProdutos(){
        let produtos: Produto[] = [];
        let p1 = new Produto();
        p1.id = 1;
        p1.nome = "Coca Cola";
        produtos.push(p1);
    
        let p2 = new Produto();
        p2.id = 2;
        p2.nome = "Fanta";
        produtos.push(p2);

        return produtos;
    }
}