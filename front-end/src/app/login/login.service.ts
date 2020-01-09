import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }  from '../../environments/environment'
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private urlLogin = environment.url+"/api/auth/signin";

  constructor(private _httpCliente: HttpClient, private _router:Router) { }

  public login(dados) {

    return this._httpCliente.post<any>(this.urlLogin,dados);
  }

  public deslogar(){
    sessionStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }

}
