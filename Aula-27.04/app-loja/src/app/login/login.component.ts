import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceUsuario: UsuarioService) { }

  usuarios: any 

  usuariosConectado = {
    id:0,
    nome: "",
    email: "",
    senha: "",
    perfil: ""
  }

  fazerLogin(dados: any) {
    this.serviceUsuario.getAll().subscribe(x => {
      this.usuarios = x
      this.verificarlogin(dados.email, dados.senha, this.usuarios)
    })
  }

  verificarlogin(email: string, senha: string, dados:any){
    localStorage.removeItem("userConectado")
    for (let i = 0; i < dados.length; i++){
      if (email == dados[i].email && senha == dados[i].senha){
        this.usuariosConectado.id = dados[i].id
        this.usuariosConectado.nome = dados[i].nome
        this.usuariosConectado.email = dados[i].email
        this.usuariosConectado.senha = dados[i].senha
        this.usuariosConectado.perfil = dados[i].perfil
        this.gravarDadosLocalStorage()
      }
    }
    window.location.reload()
  }

  //simular authgard
  gravarDadosLocalStorage(){
    localStorage.setItem("userConectado", JSON.stringify(this.usuariosConectado))
  }

  ngOnInit(): void {
  }

}
