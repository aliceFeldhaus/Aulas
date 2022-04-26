function loadFornecedor(){
    fetch("http://localhost:3000/fornecedor")
    .then(x => x.text())
    .then ( cat => displayfor(cat))

}
function displayfor(dados){
    let lista = JSON.parse(dados)
    var opt = ""
    for (let ob in lista){
        opt += "<option>" + lista[ob].nome + "</option>"
    }
    document.getElementById("fornecedor").innerHTML = opt;
}

function loadCategoria(){
    fetch("http://localhost:3000/categorias")
    .then(x => x.text())
    .then ( cat => displayCat(cat))

}
function displayCat(dados){
    let lista = JSON.parse(dados)
    var opt = ""
    for (let ob in lista){
        opt += "<option>" + lista[ob].nome + "</option>"
    }
    document.getElementById("categoria").innerHTML = opt;
}
function salvar(){
    var dados = {
        descricao: document.getElementById("descricao").value,
        preco: document.getElementById("preco").value,
        estoque: document.getElementById("estoque").value,
        fornecedor: document.getElementById("fornecedor").value,
        categoria: document.getElementById("categoria").value
    }
    
    fetch("http://localhost:3000/Fornecedores_cadastrados", {
            method: "POST",
            body: JSON.stringify(dados),
            headers: {
                'Content-type': "application/json"
            }
        })
}

