"use strict";
class Contato {
    constructor(nome, fone) {
        this.nome = nome;
        this.fone = fone;
    }
}
function testeGeneric(x) {
    return x;
}
console.log(testeGeneric("Ola mundo"));
console.log(testeGeneric(123456789));
let ct = new Contato('Maria', '2345');
console.log(testeGeneric(ct));
function lista(n1, n2) {
    let x = [n1, n2];
    return x;
}
console.log(lista('Maria', 'Alice'));
function listaComIdade(p1, p2, p3) {
    console.log(`${p1} ${p2} ${p3}`);
}
listaComIdade('Maria', 20, false);
listaComIdade(20, false, 'Maria');
listaComIdade('Maria', 75, [7, 8, 9]);
