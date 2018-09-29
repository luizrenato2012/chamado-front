import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios : Usuario [];
  argumento : string;

  constructor(private usuarioService :UsuarioService, private confirmationService : ConfirmationService) { }

  ngOnInit() {
  } 

  pesquisa() {
    console.log('pesquisando ' + this.argumento);
     if ( this.argumento=='' || this.argumento==undefined) {
      this.usuarioService.listaTodosUsuarios().subscribe( result => this.usuarios = result) ;
    } else {
      this.usuarioService.pesquisaPorNome(this.argumento).subscribe( result => this.usuarios = result);
    } 
}

  

  excluir(id :number) {
    this.confirmationService.confirm({
      message : 'Deseja realmente excluir este usuário?',
      accept : ()=> {
          this.usuarioService.exclui(id).subscribe();
          this.pesquisa();
      }
    });
  }

  alterar(usuario : Usuario) {
    console.log("editando " + usuario );
    this.usuarioService.setUsuarioEdicao(usuario);
  }

}
