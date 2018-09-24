import { Injectable, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit {
 
  private lista : Usuario[] = [];

  constructor() { 
    console.log('ngOninit ');
    this.lista = this.listaTodosUsuarios();
  }

  ngOnInit(): void {
   
  }

  listaTodosUsuarios () {
    let user = new Usuario();
    for (let i=0; i < 5; i++) {
      user = new Usuario();
      user.id=i;
      user.nome='Nome '+ i;
      user.ramal= i *10;
      this.lista.push( user);
    }
    return this.lista;
  }

  exclui (id: number) {
    this.lista.forEach( (usuario) => {
      if (usuario.id==id){
        this.lista.pop();
      }
    })
    }

    pesquisaPorNome(nome : string)  : Usuario []{
      let listaTemp = this.lista.filter( (usuario) => usuario.nome.includes(nome) );
      return listaTemp;
        
    }
  }

