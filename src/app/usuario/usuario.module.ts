import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from './usuario.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsuarioFormComponent, 
    UsuarioListComponent],
  exports :[
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  providers : [
    UsuarioService
  ]
})
export class UsuarioModule { }
