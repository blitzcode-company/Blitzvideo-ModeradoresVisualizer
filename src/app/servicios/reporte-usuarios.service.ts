import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteUsuariosService {

  private apiUrl = environment.serverIp

  constructor(private http: HttpClient) {}


  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      })
    };
  }
  obtenerReportesDeUsuarios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/usuario/reporte`, this.getHttpOptions());

  }

  obtenerReporteDeUsuarioResueltos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/usuario/reporte/resueltos`, this.getHttpOptions());
    
  }
  obtenerReporteDeUsuarioNoResueltos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/usuario/reporte/no-resueltos`, this.getHttpOptions());
    
  }
  bloquearDesbloquearUsuario(userId: number, accion: 'bloquear' | 'desbloquear'): Observable<any> {
    return this.http.put(`${this.apiUrl}api/v1/usuario/${userId}/${accion}`, {}, this.getHttpOptions());
  }

  getDetalleReporte(reporteId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/usuario/reporte/${reporteId}`, this.getHttpOptions());
  }

  marcarResuelto(reporteId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}api/v1/usuario/reporte/${reporteId}/resolver`, {}, this.getHttpOptions());
  }

  borrarReporte(reporteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}api/v1/usuario/reporte/${reporteId}`, this.getHttpOptions());
  }

  obtenerConteoUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/v1/usuario/conteo`, this.getHttpOptions());
  }
  
}
