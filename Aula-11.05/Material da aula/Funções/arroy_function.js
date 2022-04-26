//função anonima
let z = function (n1, n2){return n1 + n2}
//função arrow
let x = (n1, n2) => {return n1+ n2}
//invocar
console.log(z(10, 20));
console.log(x(10,20));

//arrow com somente um parametro

let y = n1 => {return n1*n1}

function consultar(){
    fetch("url")
        .then (x=> x.text())
}