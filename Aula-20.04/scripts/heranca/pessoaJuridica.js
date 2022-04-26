"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class PessoaJuridica extends pessoa_1.default {
    constructor(id, nome, contato, cnpj) {
        super(id, nome, contato);
        this.cnpj = cnpj;
    }
    display() {
        return `${super.display()} CNPJ: ${this.cnpj}`;
    }
    salvar() {
        console.log('Slavando pessoa juridica');
        return true;
    }
}
let pj;
pj = new PessoaJuridica(1, 'Mercado livre', 'mercadoL@gmail.com', '123.4567/4');
console.log(pj.display());
