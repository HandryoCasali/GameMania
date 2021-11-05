import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogin:any = {
    email: '',
    senha: ''
  }
  usuarioCadastro:any = {
    email: '',
    senha: ''
  }

  onSubmitLogin(form:any){
    console.log(this.usuarioLogin)
  }
  onSubmitCadastro(form:any){
    console.log(this.usuarioCadastro)
  }

  constructor() { }

  ngOnInit(): void {
  }


}
