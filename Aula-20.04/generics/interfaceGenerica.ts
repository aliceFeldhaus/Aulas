interface IDaoGenerica <T>{
    salvar():boolean;
    excluir(id:number): boolean;
    consultarTodos(): T[];
    consultarPorId(id: number): T[];
    alterar(objeto: T): boolean;
}

export {IDaoGenerica}