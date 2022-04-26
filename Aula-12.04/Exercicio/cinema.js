function criarSala() {
    var sala = document.getElementById("sala")
    sala.innerHTML = ""
    var qtdeCadeiras = document.getElementById("total").value
    for (let i = 1; i <= qtdeCadeiras; i++) {
        bt = document.createElement("button")
        bt.innerText = i
        bt.className = "livre"
        bt.setAttribute("onclick", "reservar(this)")
        sala.appendChild(bt)
    }
    totalOcupacao()
}

function totalOcupacao() {
    var x = document.getElementsByClassName("livre").length
    var y = document.getElementsByClassName("ocupado").length
    document.getElementById("totalOcupacao").innerHTML = `Total livres: ${x} 
                                                        Total ocupados: ${y}`
}

function reservar(elemento) {
    var classe = elemento.getAttribute("class")
    if (classe === "livre") {
        elemento.setAttribute("class", "ocupado")
    } else {
        elemento.setAttribute("class", "livre")
    }
    totalOcupacao()
}