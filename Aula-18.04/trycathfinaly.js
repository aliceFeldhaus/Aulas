function conectar(){
    console.log("Abrindo conexão com o banco de dados")
}

function desconectar(){
    console.log("Fechadno conexão com o banco de dados")
}

function cadastrar(dados){
    try{
        conectar()
        if (dados == 2){
            throw "Faltam dados a serem enviados para o banco"
        }

        console.log("dados gravados com sucesso")

    } catch (err){
        console.log(err)
    } finally {
        desconectar();
    }
}

cadastrar(5)