class Carro{
    constructor(placa){
        this._placa = placa
    }

    get placa(){
        return this._placa
    }
    
    set placa(pPlaca){
        this._placa = pPlaca
    }

    set marca(x){
        this._marca = x
    }

    get marca(){
        return this._marca
    }
}

let c1 = new Carro()
c1.placa = 'abc-1234'
c1.marca = "honda"
console.log(c1.placa, c1.marca)

