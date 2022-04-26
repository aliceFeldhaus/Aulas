class Contato{
    nome: string;
    fone: string;

    constructor (nome: string, fone: string){
        this.nome = nome;
        this.fone = fone;
    }
}

function testeGeneric <T>(x: T):T{
    return x;
}

console.log(testeGeneric <string>("Ola mundo"))

console.log(testeGeneric <number>(123456789))

let ct = new Contato('Maria','2345');
console.log(testeGeneric<Contato>(ct))


function lista <T> (n1: T, n2: T):T[]{
    let x: T[] = [n1, n2]
    return x;
}

console.log(lista<string>('Maria','Alice'))

function listaComIdade <T,U,Z> (p1: T, p2: U, p3: Z):void{
    console.log(`${p1} ${p2} ${p3}`)
    
}

listaComIdade<string, number, boolean>('Maria',20, false);

listaComIdade<number, boolean, string>(20, false, 'Maria');

listaComIdade<string, number, number[]>('Maria', 75, [7,8,9]);