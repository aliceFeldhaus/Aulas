function onSubmit(){

    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var email = document.getElementById("email");
    var rua = document.getElementById("rua");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var CEP = document.getElementById("CEP");
    var limite = document.getElementById("limite");
    var foto = document.getElementById("foto");

    var nome = document.getElementsByTagName("input")[0];

    if (nome.value === "") {
        alert("Informe o nome");
        nome.focus();
        return;
    }
    if (telefone.value === "") {
        alert("Informe o telefone");
        telefone.focus();
        return;
    }
    if (email.value === "") {
        alert("Informe o e-mail");
        email.focus();
        return;
    }
    if (rua.value === "") {
        alert("Informe a rua");
        rua.focus();
        return;
    }
    if (bairro.value === "") {
        alert("Informe o bairro");
        bairro.focus();
        return;
    }
    if (cidade.value === "") {
        alert("Informe a cidade");
        cidade.focus();
        return;
    }
    if (CEP.value === "") {
        alert("Informe o CEP");
        CEP.focus();
        return;
    }
    if (limite.value === "") {
        alert("Informe o limite de crédito");
        limite.focus();
        return;
    }
    if (foto.value === "") {
        alert("Insira uma foto");
        foto.focus();
        return;
    }

    document.getElementsByTagName("form")[0].submit();
}

function reset(){
    
    document.getElementById("nome").value='';
    document.getElementById("telefone").value='';
    document.getElementById("email").value='';
    document.getElementById("rua").value='';
    document.getElementById("bairro").value='';
    document.getElementById("cidade").value='';
    document.getElementById("CEP").value='';
    document.getElementById("limite").value='';
    document.getElementById("foto").value='';
}
