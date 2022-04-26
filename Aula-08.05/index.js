function loadDados() {
    fetch("http://localhost:3000/produtos")
        .then(x => x.text())
        .then(data => displayCard(data))
}

function displayCard(y) {
    let listaJson = JSON.parse(y)
    for (let i = 0; i < 10; i++) {
        var card = ""
        card += `<div class='card col-4 m-3'>`
        card += `<div class='card-body'>`
        card += `<div class="card-title bg-success text-center">${listaJson[0].nome}</div>`
        card += `<img class="card-img-top" src="${listaJson[0].imagem}" />`
        card += `<div class="card-text"> ${listaJson[0].descricao} </div>`
        card += `<div class="card-footer">${listaJson[0].preco}</div>`
        card += `</div>`
        card += `</div>`

        document.getElementById("cards").innerHTML += card;
    }
}