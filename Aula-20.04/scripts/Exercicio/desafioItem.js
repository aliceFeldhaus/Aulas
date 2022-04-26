"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class desafioItem {
    constructor(produto, precoItem, quantidade) {
        this.produto = produto;
        this.precoItem = precoItem;
        this.quantidade = quantidade;
    }
    adicionar(desafioItem) {
        console.log('Venda adicionada com sucesso');
    }
    remover(desafioItem) {
        console.log('venda removida com sucesso');
    }
    getTotal() {
        return this.precoItem * this.quantidade;
    }
    finalizar() {
        console.log('Carrinho finalizado');
    }
}
exports.default = desafioItem;
