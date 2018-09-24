import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';


@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [
    UsuarioFormComponent, 
    UsuarioListComponent],
  exports :[
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  providers : [
    ConfirmationService
  ]
})
export class UsuarioModule { }
