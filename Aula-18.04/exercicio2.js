class Pessoa{
    constructor(nome, contato){
        this.nome = nome
        this.contato = contato
    }
    display(){
        console.log(`Nome: ${this.nome} | Contato: ${this.contato}`)
    }
}

class pessoaFisica extends Pessoa{
    constructor(nome, contato, cpf){
        super (nome, contato)
        this._cpf = cpf
    }

    get cpf(){
        return this._cpf
    }

    set cpf(value){
        if (value.length == 14)
            this._cpf = value
        else 
            console.log('Cpf invalido')
    }
}

class pessoaJuridica extends Pessoa{
    constructor(nome, contato, cnpj){
        super(nome, contato)
        this.cnpj = cnpj
    }
    mostrar(){
       this.display(); 
       console.log(`CNPJ: ${this.cnpj}`)
    }
}

let p1 = new pessoaFisica()
p1.cpf = '106.008.569-00'
console.log(p1.cpf)

