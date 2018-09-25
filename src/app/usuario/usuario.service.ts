import { Injectable, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit {

  private lista: Usuario[] = [];
  private usuarioEdicao :Usuario;

  constructor() {
    console.log('criando Usuario service');
    this.lista = this.listaTodosUsuarios();
  }

  ngOnInit(): void {

  }

  listaTodosUsuarios() {
    if (this.lista.length == 0) {
      this.initLista();

    }
    return this.lista;
  }

  initLista() {
    let user = new Usuario();
    for (let i = 0; i < 5; i++) {
      user = new Usuario();
      user.id = i;
      user.nome = 'Nome ' + i;
      user.ramal = i * 10;
      this.lista.push(user);
    }
  }

  exclui(id: number) {
    this.lista.forEach((usuario) => {
      if (usuario.id == id) {
        this.lista.pop();
      }
    })
  }

  pesquisaPorNome(nome: string): Usuario[] {
    let listaTemp = this.lista.filter((usuario) => usuario.nome.includes(nome));
    return listaTemp;

  }

  inclui(usuario: Usuario) {
    usuario.id = this.lista.length+1;
    this.lista.push(usuario);
  }

  altera (usuario : Usuario) {
    let listaTemp : Usuario[] = [];
    listaTemp = this.lista.filter( (usuraioTemp) => usuraioTemp.id=== usuario.id );
    if (listaTemp.length===0){
      console.log('Usuario '+ usuario + ' nao encotrado');
      return;
    }
    Object.assign(listaTemp[0], usuario);
  }

  setUsuarioEdicao(usuario: Usuario) {
    console.log('setando edicao '+ JSON.stringify(usuario));
    this.usuarioEdicao = usuario;
  }

  getUsuarioEdicao() {
    console.log('retornando edicao '+ JSON.stringify(this.usuarioEdicao));
    return this.usuarioEdicao;
  }


}

