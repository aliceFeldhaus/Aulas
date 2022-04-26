function loadDados(){
    fetch("http://localhost:3000/Fornecedores_cadastrados")
    .then(x => x.text())
    .then (cat => displayDados(cat))

}
function displayDados(lista){
    let listaJson = JSON.parse(lista)
    var trs = "";
    for (let indice in listaJson){
        trs += "<tr>"
        trs += "<td>" + listaJson[indice].id + "</td>"
        trs += "<td>" + listaJson[indice].descricao + "</td>"
        trs += "<td>" + listaJson[indice].preco + "</td>"
        trs += "<td>" + listaJson[indice].estoque + "</td>"
        trs += "<td>" + listaJson[indice].fornecedor + "</td>"
        trs += "<td>" + listaJson[indice].categoria + "</td>"
        trs += "</tr>"
    }
        document.getElementsByTagName("tbody")[0].innerHTML = trs;
}

