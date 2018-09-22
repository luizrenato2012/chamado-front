import { Injectable, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit {
 
  private lista : Usuario[];

  constructor() { }

  ngOnInit(): void {
    let user = new Usuario();
    for (let i=0; i < 5; i++) {
      user = new Usuario();
      user.id=i;
      user.nome='Nome '+ i;
      user.ramal= i *10;
      this.lista.push( user);
    }
  }

  listaUsuarios () {
    return this.lista;
  }

}
