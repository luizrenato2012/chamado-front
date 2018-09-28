import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsuarioResolver implements Resolve<Usuario>{

    constructor(private service : UsuarioService) {}

    resolve( route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Usuario{
        return this.service.getUsuarioEdicao();
    }

}