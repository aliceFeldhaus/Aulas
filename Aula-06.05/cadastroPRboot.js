function loadCategorias(){
    fetch("http://localhost:3000/categorias")
        .then (x => x.text())
        .then(cat => display(cat))
}
function display(dados){
    let lista = JSON.parse(dados)
    var opt = ""
    for (let ob in lista){
        opt += "<option>" + lista[ob].name + "</option>"
    }

    document.getElementById("categorias").innerHTML = opt;
}