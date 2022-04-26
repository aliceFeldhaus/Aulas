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
        super(nome, contato)
        this.cpf = cpf
    }
    show(){
       this.display(); 
       console.log(`CPF: ${this.cpf}`)
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

let pf1 = new pessoaFisica('ana', '1234', '21334235848')
pf1.show()

let pj1 = new pessoaJuridica('alice','345678','4838434985439')
pj1.mostrar()