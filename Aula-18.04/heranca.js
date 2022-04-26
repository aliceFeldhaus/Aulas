class Car {
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a ' + this.carname;
    }
}

let car1 = new Car("Kombi")

class Model extends Car{
    constructor(brand, mod){
        super (brand);
        this.Model = mod;
    }
    show(){
        return this.carname + ', it is a ' + this.Model;
    }
}

let model1 = new Model('Kombi', "Serie de luxo")
console.log(model1.show())