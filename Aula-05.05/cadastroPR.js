function onSubmit(){

    var descricao = document.getElementById("descricao");
    var preco = document.getElementById("preco");
    var unidade = document.getElementById("unidade");
    var fornecedor = document.getElementById("fornecedor");

    var descricao = document.getElementsByTagName("input")[0];

    if (descricao.value === "") {
        alert("Informe uma descrição");
        descricao.focus();
        return;
    }
    if (preco.value === "") {
        alert("Informe o preço unitário");
        preco.focus();
        return;
    }
    if (unidade.value === "") {
        alert("Informe a unidade");
        unidade.focus();
        return;
    }
    if (fornecedor.value === "") {
        alert("Informe o fornecedor");
        fornecedor.focus();
        return;
    }

    document.getElementsByTagName("form")[0].submit();
}
function reset(){
    
    document.getElementById("descricao").value='';
    document.getElementById("preco").value='';
    document.getElementById("unidade").value='';
    document.getElementById("fornecedor").value='';
}

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
