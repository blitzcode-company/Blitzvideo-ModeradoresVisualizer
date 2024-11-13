import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApiUrl = environment.authApiUrl

  private usuarioSubject = new BehaviorSubject<any>(null);
  public usuario$: Observable<any> = this.usuarioSubject.asObservable();

  constructor(private http: HttpClient) { }

  mostrarUserLogueado() {
    const url = `${this.authApiUrl}api/v1/validate`
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      })
    };
    return this.http.get(url, httpOptions).pipe(
      tap(user => this.usuarioSubject.next(user))
    );
  }


  sendLogin(credentials: any) {
    const url = `${this.authApiUrl}oauth/token`
    const body = {
      grant_type: "password",
      client_id: "5",
      client_secret: "ZdREIxuFRFwJ3G5jr6MVFjouAy50UvDd1Ysstw5l",
      username: credentials.email,
      password: credentials.password

    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.http.post(url, body, httpOptions);


  }

  registro(credentials:any) {
    const url = `${this.authApiUrl}api/v1/user`
    const body = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      fecha_de_nacimiento: credentials.fecha_de_nacimiento,
      password_confirmation: credentials.password_confirmation
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.http.post(url, body, httpOptions)
  }

 
 

}
