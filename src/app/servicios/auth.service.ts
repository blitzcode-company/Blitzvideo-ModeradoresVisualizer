import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';
import { catchError, map } from 'rxjs';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.serverIp

  private usuarioSubject = new BehaviorSubject<any>(null);
  public usuario$: Observable<any> = this.usuarioSubject.asObservable();
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);


  constructor(private http: HttpClient) {

    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      this.tokenSubject.next(storedToken);
    }
  }

  obtenerToken(): string | null {
    return this.tokenSubject.value;
  }


  login(credentials:any): Observable<any> {
    const body = { 
      username:credentials.username, 
      password:credentials.password 
    };
    return this.http.post<any>(`${this.apiUrl}api/v1/login`, body).pipe(
      map(response => {
        localStorage.setItem('accessToken', response.token);
        this.tokenSubject.next(response.token);
        return response;
      }),
      catchError(error => {
        throw new Error('Error en el login: ' + error.message);
      })
    );
  }
 

  logout(): Observable<any> {
    const token = this.obtenerToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post<any>(`${this.apiUrl}api/v1/logout`, {}, { headers }).pipe(
        map(response => {
          localStorage.removeItem('accessToken');
          this.tokenSubject.next(null);
          return response;
        }),
        catchError(error => {
          throw new Error('Error en el logout: ' + error.message);
        })
      );
    }
    return new Observable(observer => observer.complete());
  }

  obtenerDatosDelUsuario(): Observable<any> {
    const token = this.obtenerToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<any>(`${this.apiUrl}api/v1/user`, { headers }).pipe(
        catchError(error => {
          throw new Error('Error al obtener los datos del usuario: ' + error.message);
        })
      );
    } else {
      throw new Error('Usuario no autenticado');
    }
  }

  isAuthenticated(): boolean {
    return !!this.obtenerToken();
  }
}
