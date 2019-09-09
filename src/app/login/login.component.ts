import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control:FormControl | null, form:FormGroupDirective | NgForm | null):boolean{
    const isSubmited = form && form.submitted;
    return!!(control && control.invalid && (control.dirty || control.touched || isSubmited));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email,
  ]);

  matcher=new MyErrorStateMatcher();
  constructor() { }

}
