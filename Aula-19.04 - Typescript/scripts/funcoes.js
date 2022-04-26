"use strict";
function soma(n1, n2) {
    try {
        if ((n1 == 0) || (n2 == 0)) {
            throw "parâmetros não informado";
        }
        return n1 + n2;
    }
    catch (err) {
        console.log("passou aqui");
        return err;
    }
}
function subtracao(n1, n2) {
    try {
        if ((n1 == 0) || (n2 == 0)) {
            throw "parâmetros não informado";
        }
        return n1 - n2;
    }
    catch (err) {
        console.log("passou aqui");
        return err;
    }
}
function multiplicacao(n1, n2) {
    try {
        if ((n1 == 0) || (n2 == 0)) {
            throw "parâmetros não informado";
        }
        return n1 * n2;
    }
    catch (err) {
        console.log("passou aqui");
        return err;
    }
}
function divisao(n1, n2) {
    try {
        if ((n1 == 0) || (n2 == 0)) {
            throw "parâmetros não informado";
        }
        return n1 / n2;
    }
    catch (err) {
        console.log("passou aqui");
        return err;
    }
}
/* Exemplos de funções diferentes

-- Funções anonimas --

var subtracao = function (n1:number, n2:number):number{
                    return n1 - n2
                }

console.log(subtracao(20, 10))

-- arrow function --

var mutiplicacao = (n1: number, n2: number) : number => { return n1 * n2 }
console.log(`mutiplicacao: ${mutiplicacao(20, 10)}`)

*/ 
