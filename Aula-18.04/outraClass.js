class Agenda {
    constructor (data, hora, descricao, contato){
        this.data = data
        this.hora = hora
        this.descricao = descricao
        this.contato = contato
    }
    //metodo
    display(){
        console.log(`
        Data: ${this.data}
        Hora: ${this.hora}
        Descricao: ${this.descricao}
        Contato: ${this.contato}
        `)
    }
}
let registro = new Agenda ('12/08', '12:00', 'almoço', 'Luan')
registro.display()

//como passar informações sem o let
let registro2 = new Agenda()
registro2.data = '15/04/2022'
registro2.display()