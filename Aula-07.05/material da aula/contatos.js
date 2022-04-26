function salvar(){
    var contato = {
        nome: document.getElementById("idnome").value,
        telefone: document.getElementById("idtelefone").value,
        email: document.getElementById("idemail").value
    }
    
    fetch("http://localhost:3000/contatos",
        {
            method: "POST",
            body: JSON.stringify(contato),
            headers: {
                'Content-type': "application/json"
            }
            
        }
    )
    .then(ct => ct.json())
    .then(x => console.log(x))

}
function loadContatos(){
    fetch("http://localhost:3000/contatos")
    .then(x => x.text())
    .then (data => display(data))

}
function display(lista){
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
        document.getElementsByTagName("tbody")[0].innerHTML = trs
}
