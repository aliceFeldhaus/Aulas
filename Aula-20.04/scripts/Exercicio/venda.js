"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Venda {
    constructor(Data, Cliente) {
        this.Data = Data;
        this.Cliente = Cliente;
    }
    salvar() {
        console.log('Venda cadastrada com sucesso');
        return true;
    }
    alterar(objeto) {
        console.log('Venda alterada com sucesso');
        return true;
    }
    excluir(id) {
        console.log('Venda excluida com sucesso');
    }
    consultar() {
        let x = [];
        return x;
    }
    consultarPorId(id) {
        return '';
    }
}
let v1;
v1 = new Venda('10/04./2022', 'Maria');
v1.salvar();
v1.alterar('Maria');
