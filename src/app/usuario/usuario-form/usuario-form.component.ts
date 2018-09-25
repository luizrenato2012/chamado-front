import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario = new Usuario();
  tipoMensagem: string;
  mensagem: string;
  exibeMensagem = false;

  constructor(private service: UsuarioService, private route: ActivatedRoute) {
    if (this.route != undefined) {
      let usuarioTemp = this.route.snapshot.data.usuarioEdicao;
      if (usuarioTemp != undefined) {
        this.usuario = usuarioTemp;
      }
    }

  }

  ngOnInit() {

  }

  limpaMensagem() {
    this.exibeMensagem = false;
  }

  grava(usuario: Usuario, form: NgForm) {
    console.log(usuario);
    this.service.inclui(usuario);
    this.usuario = new Usuario();
    form.form.markAsPristine();
    this.exibeMensagem = true;
    this.tipoMensagem = 'success';
    this.mensagem = 'Usuario gravado com sucesso!';
  }

  cancela(frm: NgForm) {
    frm.form.reset();
    this.limpaMensagem();
  }


}
