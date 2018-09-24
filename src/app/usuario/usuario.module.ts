import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    BrowserModule,
    BrowserAnimationsModule
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
