import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  gravar(dados: any){
    let url = 'http://localhost:3000/produtos'
    return this.http.post(url, dados)
  }

  getAll(){
    let url = 'http://localhost:3000/produtos'
    return this.http.get(url)
  }

  getOne(idproduto: number){
    return this.http.get(`http://localhost:3000/produtos/${idproduto}`)
  }
  
  alterar(dados: any){
    let url = `http://localhost:3000/produtos/${dados.id}`
    return this.http.put(url, dados)
  }

  excluir(idproduto: number){
    let url = `http://localhost:3000/produtos/${idproduto}`
    return this.http.delete(url)
  }

}