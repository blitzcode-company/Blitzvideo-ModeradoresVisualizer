import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteVideosService {

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
  obtenerReportesDeVideos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/video/reporte`, this.getHttpOptions());

  }

  obtenerReporteDeVideoResueltos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/video/reporte/resueltos`, this.getHttpOptions());
    
  }
  obtenerReporteDeVideoNoResueltos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/video/reporte/no-resueltos`, this.getHttpOptions());
    
  }
  bloquearDesbloquearVideo(videoId: number, accion: 'bloquear' | 'desbloquear'): Observable<any> {
    return this.http.put(`${this.apiUrl}api/v1/video/${videoId}/${accion}`, {}, this.getHttpOptions());
  }

  getDetalleReporte(reporteId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/video/reporte/${reporteId}`, this.getHttpOptions());
  }

  marcarResuelto(reporteId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}api/v1/video/reporte/${reporteId}/resolver`, {}, this.getHttpOptions());
  }

  borrarReporte(reporteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}api/v1/video/reporte/${reporteId}`, this.getHttpOptions());
  }
  obtenerConteoVideos(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/v1/video/conteo`, this.getHttpOptions());
  }
}
