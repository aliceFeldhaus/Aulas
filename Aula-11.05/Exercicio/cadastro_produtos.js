function salvar(){
    var dados = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
    }
    
    fetch("http://localhost:3000/contatos", {
            method: "POST",
            body: JSON.stringify(dados),
            headers: {
                'Content-type': "application/json"
            }
        })
}

