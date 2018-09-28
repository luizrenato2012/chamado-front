import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-roouting.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
