import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form:FormGroup;
  public login:boolean = false;
  public erro;
  public registrese:boolean = false;

  constructor(private _formBuilder:FormBuilder, private _loginService: LoginService, private _router: Router) {
    this.form  = _formBuilder.group({
      "name": [null],
      "email": [null, Validators.required],
      "password"  : [null, Validators.required],
      "repassword"  : [null]
    });
   }

   ngOnInit() {
    sessionStorage.clear();
    this.login = false;
  }

  enableRegister(){
    this.registrese = !this.registrese;
    if(this.registrese){
      this.form.get("name").setValidators(Validators.required);
      this.form.reset();
    } else{
      this.form.get("name").setValidators(null);
      this.form.reset();
    }
  }
  
  realizarLogin(){
    sessionStorage.setItem("token", "teste");
    this._router.navigate(["/main"]);
    /*this.login = true;
    this._loginService.login(this.form.value).subscribe(
      suc=>{
        sessionStorage.setItem("token", suc.accessToken);
        this._router.navigate(["/main/home"]);
        this.login = false;
      },
      err=>{
        this.login = false;
      }
    );*/
  }

}
