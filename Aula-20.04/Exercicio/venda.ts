import {IDao } from "./interfaceVenda";

class Venda implements IDao{
    Data: string;
    Cliente: string;

    constructor (Data: string, Cliente: string){
        this.Data = Data;
        this.Cliente = Cliente
    }

    salvar(): boolean {
        console.log ('Venda cadastrada com sucesso')
        return true;
    }

    alterar(objeto: string): boolean {
        console.log ('Venda alterada com sucesso')
        return true;
    }

    excluir(id: number): void {
        console.log ('Venda excluida com sucesso')
    }

    consultar(): string[] {
        let x : string [] = [];
        return x;
    }

    consultarPorId(id: number): string {
        return '';
    }
}

let v1: Venda;
v1 = new Venda('10/04./2022','Maria')
v1.salvar()
v1.alterar('Maria')