"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const desafioItem_1 = __importDefault(require("./desafioItem"));
const desafioProduto_1 = __importDefault(require("./desafioProduto"));
let camisa;
camisa = new desafioProduto_1.default(1, 'Camisa de algodão', 15, 3);
let it1;
it1 = new desafioItem_1.default(camisa, 15, 3);
console.log(it1);
