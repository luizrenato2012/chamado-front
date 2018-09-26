import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MessageModule} from 'primeng/message'

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from './usuario.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MessageModule,
    RouterModule
  ],
  declarations: [
    UsuarioFormComponent, 
    UsuarioListComponent],
  exports :[
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  providers : [
    ConfirmationService,
    UsuarioService
  ]
})
export class UsuarioModule { }
