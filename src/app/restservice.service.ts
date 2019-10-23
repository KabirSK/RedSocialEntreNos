import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RESTServiceService {
  host='http://localhost:51095/api/';

  constructor(private http:HttpClient) { }

  postObtenerInformacionUsuario(login: string){
    return this.http.post(this.host+"/RedSocial/ListarUsuarios",
    {
      "login":login
    }).pipe(map(data=>data));
  }

  postCrearUsuario(login: string,
                  p_primer_nombre:string,
                  p_segundo_nombre:string,
                  p_primer_apellido:string,
                  p_segundo_apellido:string,
                  p_fecha_nacimiento:string,
                  p_fecha_creacion:string,
                  p_sexo:number,
                  p_email:string,
                  p_rol:number,
                  p_validado_facebook:number,
                  p_password:string){
    return this.http.post(this.host+"/RedSocial/InsertarNuevoUsuario",
    {
      "LOGIN": login,
        "p_PRIMERNOMBRE": p_primer_nombre,
        "p_SEGUNDONOMBRE": p_segundo_nombre,
        "p_PRIMERAPELLIDO": p_primer_apellido,
        "p_SEGUNDOAPELLIDO": p_segundo_apellido,
        "p_FECHANACIMIENTO": p_fecha_nacimiento,
        "p_FECHACREACION": p_fecha_nacimiento,
        "p_SEXO": p_sexo,
        "p_EMAIL": p_email,
        "p_ROL": p_rol,
        "p_VALIDADOFACEBOOK": p_validado_facebook,
        "p_PASSWORD": p_password
    }).pipe(map(data=>data));
  }
}
