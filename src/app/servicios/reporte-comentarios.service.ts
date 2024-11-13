import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteComentariosService {

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
  obtenerReportesDeComentarios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/comentario/reporte`, this.getHttpOptions());

  }

  obtenerReporteDeComentariosResueltos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/comentario/reporte/resueltos`, this.getHttpOptions());
    
  }
  obtenerReporteDeComentariosNoResueltos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/comentario/reporte/no-resueltos`, this.getHttpOptions());
    
  }
  bloquearDesbloquearComentario(comentarioId: number, accion: 'bloquear' | 'desbloquear'): Observable<any> {
    return this.http.put(`${this.apiUrl}api/v1/comentario/${comentarioId}/${accion}`, {}, this.getHttpOptions());
  }

  getDetalleReporte(reporteId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/comentario/reporte/${reporteId}`, this.getHttpOptions());
  }

  marcarResuelto(reporteId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}api/v1/comentario/reporte/${reporteId}/resolver`, {}, this.getHttpOptions());
  }

  borrarReporte(reporteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}api/v1/comentario/reporte/${reporteId}`, this.getHttpOptions());
  }

  obtenerConteoComentarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/v1/comentario/conteo`, this.getHttpOptions());
  }

  
}
