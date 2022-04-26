/*function teste(n1, n2){
    try{
        if (n2 == 0){
            throw "não muda o valor"
        }else{
            let x = n1 + n2
        }
        
    }
    catch(erro){
        console.log(`Erro: ${erro}`)
    }
}

teste (10,5)
*/

function pegaDadosArray(){
    let a = [1,2,3,4,5,6]
    try{
        let i = 6
        if (i >= a.length){
            throw "indica de array invalido"
        }
        let x = a[6]
        console.log(x)
    }
    catch(err){
        console.log(err)
    }
}

pegaDadosArray()