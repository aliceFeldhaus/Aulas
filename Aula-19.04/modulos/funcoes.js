var soma = function (n1, n2){
    return n1+n2
}

var subtracao = function (n1, n2){
    return n1-n2
}

var mutiplicacao = function (n1, n2){
    try{
        if (n1 === undefined | n2 === undefined){
            throw "Informe um valor para n1 e n2"
        }
    }
    catch (erro){
        return erro
    }
    return n1 * n2
}

var divisao = function (n1, n2){
    try{
        if (n1 === undefined | n2 === undefined){
            throw "Informe um valor para n1 e n2"
        }

        if (n2 === 0){
            throw 'O divisor nao deve ser zero'
        }
    }
    catch (erro){
        return erro
    }
    return n1 / n2
}

var chamaFuncao = function (res){

    res.write('<h1>Testando funcao soma</h1>')
    res.write(`100 + 50 = ${soma(100,50)}`);
    res.write('<hr/>')

    res.write('<h1>Testando funcao subtracao</h1>')
    res.write(`100 - 50 = ${subtracao(100,50)}`)
    res.write('<hr/>')

    res.write('<h1>Testando funcao mutiplicacao</h1>')
    res.write(`100 * 50 = ${mutiplicacao(100,50)}`);
    res.write('<hr/>')

    res.write('<h1>Testando funcao divisao</h1>')
    res.write(`100 / 50 = ${divisao(100,50)}`);
    res.write('<hr/>')

}

module.exports = {soma, subtracao, mutiplicacao, divisao, chamaFuncao}