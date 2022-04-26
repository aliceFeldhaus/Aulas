var URLAluno = "http://localhost:3000/aluno"

class Aluno{
    constructor(id,nome,login,senha,email,escola,matricula){
        this.id = id
        this.nome = nome
        this.login = login
        this.senha = senha
        this.email = email
        this.escola = escola
        this.matricula = matricula
    }

    salvar(){
        fetch(URLAluno,{
            method: 'POST',
            body: JSON.stringify(this),
            headers: {'content-type':'application/JSON'}
        })
        .catch(erro => console.log(erro))
    }

    consultar() {
        fetch (URLAluno)
            .then(x => x.text())
            .then(data => display(data))
    }

    consultarId(idAluno, display){
        fetch(`${URLAluno}/${idAluno}`)
        .then(x => x.text())
        .then(dados => display(dados))
    }

    update(){
        fetch(`${URLAluno}/${this.id}`,
        {
            method: 'PUT',
            body: JSON.stringify(this),
            headers: {'content-type':'application/JSON'}
        })
    }

    deletar(idAluno){
        fetch(`${URLAluno}/${idAluno}`,
        {
            method: 'DELETE'
        })
    }
}