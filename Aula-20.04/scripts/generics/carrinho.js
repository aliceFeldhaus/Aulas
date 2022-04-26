"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("./item"));
const produto_1 = __importDefault(require("./produto"));
let feijao;
feijao = new produto_1.default('Feijão preto', 5, 10);
let arroz = new produto_1.default('Arroz', 14.90, 25);
let it1 = new item_1.default('feijao', feijao.valorUnitario, 2);
let it2 = new item_1.default('arroz', arroz.valorUnitario, 3);
let carrinho = [it1, it2];
console.log(carrinho);
