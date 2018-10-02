import { Injectable, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API="http://localhost:1234/api/usuarios";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit {

  private lista: Usuario[] = [];
  private usuarioEdicao :Usuario;

  constructor(private httpClient : HttpClient) {
    console.log('criando Usuario service');
    // this.lista = this.listaTodosUsuarios();
  }

  ngOnInit(): void {

  }

  listaTodosUsuarios(): Observable<Usuario[]> {
    return this.httpClient
        .get<Usuario[]>(API);
  }


  exclui(id: number) {
    return this.httpClient.delete(API+"/"+id);
  }

  pesquisaPorNome(nome: string): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(API + "?nome="+nome);
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

