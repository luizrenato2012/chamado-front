import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios : Usuario [];
  constructor(private usuarioService :UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.listaUsuarios();
  }

  pesquisa() {

  }

}
