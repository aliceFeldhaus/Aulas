function onSubmit() {
    var nome = document.getElementById("nome");
    if (nome.value === "") {
        document.getElementById("msgNome").innerHTML = "<span>Informe nome</span>";
        nome.focus();
        return;
    }
    var email = document.getElementById("email");
    if (email.value === "") {
        document.getElementById("msgEmail").innerHTML = "<span>Informe e-mail</span>";
        email.focus();
        return;
    }
    var telefone = document.getElementById("telefone");
    if (telefone.value === "") {
        document.getElementById("magTelefone").innerHTML = "<span>Informe telefone</span>";
        telefone.focus();
        return;
    }
    document.getElementsByTagName("form")[0].submit();
}
