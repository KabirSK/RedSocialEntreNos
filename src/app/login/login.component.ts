import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RESTServiceService } from '../restservice.service';
import { ConnectedPositionStrategy } from '@angular/cdk/overlay';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmited = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmited));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  loginFormGroup = new FormGroup({
    loginEmail: new FormControl(''),
    loginPassword: new FormControl('')
  })

  matcher = new MyErrorStateMatcher();
  constructor(public RESTService: RESTServiceService) { }

  getInformacionUsuario() {
    let usuario = this.loginFormGroup.controls["loginEmail"].value;
    let password = this.loginFormGroup.controls["loginPassword"].value;
  
    this.RESTService.postObtenerInformacionUsuario(usuario).subscribe(
      msg => {
        console.log(msg);
        let usuarioREST = msg[0].login;
        let passwordREST = msg[0].p_PASSWORD;
        console.log(usuarioREST, passwordREST);
        if(usuario==usuarioREST && password==passwordREST){
          
        }        
      }
    )
  }
}
