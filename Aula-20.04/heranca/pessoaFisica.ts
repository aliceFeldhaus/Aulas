import Pessoa from './pessoa'

class PessoaFisica extends Pessoa{
    cpf: string;
    constructor (id: number, nome: string, contato: string, cpf: string){
        super(id, nome, contato)
        this.cpf = cpf
    }

    display():string{
        let p: string = super.display()
        return `${p} cpf: ${this.cpf}`
    }

    salver(): boolean{
        console.log('Slavando pessoa fisica');
        return true;
    }
}

let pf = new PessoaFisica(2,'Alice','alice@gmail.com','123.456.789-10')
console.log(pf.display())