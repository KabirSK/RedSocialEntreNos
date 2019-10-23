import { Component, OnInit } from '@angular/core';
import { RESTServiceService } from '../restservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  singupFormGroup = new FormGroup({
    signUpUsuario: new FormControl(''),
    signUpPassword: new FormControl(''),
    signUpPrimerNombre: new FormControl(''),
    signUpSegundoNombre: new FormControl(''),
    signUpPrimerApellido: new FormControl(''),
    signUpSegundoApellido: new FormControl(''),
    signUpCorreo: new FormControl(''),
    signUpSexo: new FormControl(''),
    signUpFechaNacimiento: new FormControl('')
  })

  constructor(public RESTService: RESTServiceService) { }

  ngOnInit() {
  }

  CrearUsuario() {
    let login = this.singupFormGroup.controls["signUpUsuario"].value;
    let p_primer_nombre = this.singupFormGroup.controls["signUpPrimerNombre"].value;
    let p_segundo_nombre = this.singupFormGroup.controls["signUpSegundoNombre"].value;
    let p_primer_apellido = this.singupFormGroup.controls["signUpPrimerApellido"].value;
    let p_segundo_apellido = this.singupFormGroup.controls["signUpSegundoApellido"].value;
    let p_fecha_nacimiento = this.singupFormGroup.controls["signUpFechaNacimiento"].value;
    let p_sexo = this.singupFormGroup.controls["signUpSexo"].value;
    let p_email = this.singupFormGroup.controls["signUpCorreo"].value;
    let p_rol = 1;
    let p_validado_facebook = 0;
    let p_password = this.singupFormGroup.controls["signUpPassword"].value;

    let pipe=new DatePipe('en-US');
    let fecha_nacimiento = pipe.transform(p_fecha_nacimiento,'shortDate');

    this.RESTService.postCrearUsuario(
      login,
      p_primer_nombre,
      p_segundo_nombre,
      p_primer_apellido,
      p_segundo_apellido,
      "01/01/2019",
      "01/01/2019",
      p_sexo,
      p_email,
      p_rol,
      p_validado_facebook,
      p_password
    ).subscribe(
      msg=>{
        console.log(msg);
      }
    )
  }

}
