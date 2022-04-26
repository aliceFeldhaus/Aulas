function pesquisacep(valor) {
    var script = document.createElement('script');
    //Sincroniza com o callback.
    script.src = 'https://viacep.com.br/ws/' + valor + '/json/?callback=pegaEndereco';
    //Insere script no documento e carrega o conteúdo.
    document.body.appendChild(script);
}

function pegaEndereco(endereco) {
    document.getElementById("rua").value = endereco.logradouro
    document.getElementById("bairro").value = endereco.bairro
    document.getElementById("complemento").value = endereco.complemento
    document.getElementById("cidade").value = endereco.localidade
    document.getElementById("uf").value = endereco.uf
}

function salvar() {
    if (validaDados()) {
        salvar()
    }
}

function validaDados() {
    if (document.getElementById("cep").value === "") {
        alert("Informe cep")
        document.getElementById("cep").focus()
        return false
    }

    if (document.getElementById("rua").value === "") {
        alert("Informe rua")
        document.getElementById("rua").focus()
        return false
    }

    if (document.getElementById("numero").value === "") {
        alert("Informe numero")
        document.getElementById("numero").focus()
        return false
    }
    return true;
}

function salvar() {
    var cliente = {
        nome: document.getElementById("nome").value,
        cep: document.getElementById("cep").value,
        rua: document.getElementById("rua").value,
        numero: document.getElementById("numero").value,
        complemento: document.getElementById("complemento").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        uf: document.getElementById("uf").value,
    }
    fetch("http://localhost:3000/clientes", 
        {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers:{
                'Content-type':'Application/json'
            }
        })
        
    }

function limpar() {
    document.getElementById("cep").value = ""
    document.getElementById("rua").value = ""
    document.getElementById("numero").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("complemento").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("uf").value = ""
}