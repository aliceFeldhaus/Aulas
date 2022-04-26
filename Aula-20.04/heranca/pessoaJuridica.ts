import Pessoa from "./pessoa";

class PessoaJuridica extends Pessoa{
    cnpj: string;

    constructor(id: number, nome: string, contato: string, cnpj: string){
        super(id, nome, contato)
        this.cnpj = cnpj
    }

    display(): string {
        return `${super.display()} CNPJ: ${this.cnpj}`
    }

    salvar(): boolean {
        console.log('Slavando pessoa juridica');
        return true;
    }
}

let pj: PessoaJuridica;
pj = new PessoaJuridica(1,'Mercado livre','mercadoL@gmail.com','123.4567/4')
console.log(pj.display())