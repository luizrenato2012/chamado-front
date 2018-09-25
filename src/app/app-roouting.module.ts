import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioModule } from './usuario/usuario.module';
import { AppComponent } from './app.component';
import { UsuarioResolver } from './usuario/usuario.resolver';

const routes : Route[] = [
    
    {
        path :'usuario-form',
        component : UsuarioFormComponent,
        resolve: {
            usuarioEdicao : UsuarioResolver
        }
    },
    {
        path :'usuario-list',
        component : UsuarioListComponent
    },
    {
        path :'*',
        component : AppComponent
    }
] 
@NgModule({

    imports : [
        RouterModule.forRoot(routes),
        UsuarioModule
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule {
    
}