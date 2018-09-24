import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios : Usuario [];
  constructor(private usuarioService :UsuarioService, private confirmationService : ConfirmationService) { }

  ngOnInit() {
  } 

  pesquisa() {
    console.log('pesquisando');
    this.usuarios = this.usuarioService.listaUsuarios();
  }

  excluir(id :number) {
    this.confirmationService.confirm({
      message : 'Deseja realmente excluir este usuário?',
      accept : ()=> {
          this.usuarioService.exclui(id);
      }
    });
  }

}
