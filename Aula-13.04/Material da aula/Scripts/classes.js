var urlBase = "http://localhost:3000/contatos"

class Contato{
    constructor(id, nome, fone, email){
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
    }

    Salvar(){
        console.log(this)
        fetch (urlBase,
        {
            method: 'POST',
            body: JSON.stringify(this),
            headers:{
                'Content-type':'Application/json'
            }
        })
        .catch(erro => console.log(erro))
    }

    consultarTodos(display){
        fetch(urlBase)
        .then(x => x.text())
        .then(data => display(data))
    }

    consultaPeloID(idContato, display){
        fetch(`${urlBase}/${idContato}`)
        .then(x => x.text())
        .then(data => display(data))
    }

    update(){
        fetch (`${urlBase}/${this.id}`,
        {
            method:'PUT',
            body: JSON.stringify(this),
            headers: {'Content-type':'Application/json'}
        })
    }

    excluir(idContato){
        fetch (`${urlBase}/${idContato}`,
        {
            method:'DELETE',
        })
    }
}



