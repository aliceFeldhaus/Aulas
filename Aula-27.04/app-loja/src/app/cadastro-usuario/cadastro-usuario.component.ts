import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  msg: string = ""
  produtos: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  limparMsg(){
    this.msg = "";
  }

}
