function load(){
    fetch("http://localhost:3000/contatos")
    .then(x => x.text())
    .then (data => {
        mostrarEmCard(data);
        mostrarEmTabela(data)
    })

}
function mostrarEmTabela(lista){
    let listaJson = JSON.parse(lista)
    var trs = "";
    for (let indice in listaJson){
        trs += "<tr>"
        trs += "<td>" + listaJson[indice].id + "</td>"
        trs += "<td>" + listaJson[indice].nome + "</td>"
        trs += "<td>" + listaJson[indice].telefone + "</td>"
        trs += "<td>" + listaJson[indice].email + "</td>"
        trs += "</tr>"
    }
        document.getElementsByTagName("tbody")[0].innerHTML = trs;
}

function mostrarEmCard(dados) {
    let listaJson = JSON.parse(dados)
    for (let i in listaJson) {
        var card = ""
        card += `<div class='card col-4 m-3'>`
        card += `<div class='card-body'>`
        card += `<div class="card-title bg-success text-center">${listaJson[i].nome}</div>`
        card += `<img class="card-img-top" src="${listaJson[0].foto}" />`
        card += `<div class="card-text"> ${listaJson[i].telefone} </div>`
        card += `<div class="card-footer">${listaJson[i].email}</div>`
        card += `</div>`
        card += `</div>`

        document.getElementById("cards").innerHTML += card;
    }

}
