import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../servicios/status.service';
import { ReporteVideosService } from '../../servicios/reporte-videos.service';
import { ReporteComentariosService } from '../../servicios/reporte-comentarios.service';
import { ReporteUsuariosService } from '../../servicios/reporte-usuarios.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  reportesComentariosPendientes = 0;
  reportesComentariosResueltos = 0;
  reportesVideosPendientes = 0;
  reportesVideosResueltos = 0;
  reportesUsuariosPendientes = 0;
  reportesUsuariosResueltos = 0;

  reportesComentarios = [];

  reportesVideos = [];

  reportesUsuarios = [];


  constructor(public status:StatusService, 
              private reporteVideo: ReporteVideosService,
              private reporteComentario: ReporteComentariosService,
              private reporteUsuario: ReporteUsuariosService,
              private titleService: Title,
              private router: Router) {

  }

  ngOnInit(): void {
   this.conteoReporteVideos();
   this.conteoReporteUsuarios();
   this.conteoReporteComentarios();   
   this.cargarReportesComentarios();
   this.cargarReportesUsuarios()
   this.cargarReportesVideos();
   this.titleService.setTitle("Inicio - Blitzvideo Moderadores")
  }


  conteoReporteComentarios(): void {
    this.reporteComentario.obtenerConteoComentarios().subscribe(data => {
      this.reportesComentariosPendientes = data.pendientes;
      this.reportesComentariosResueltos = data.resueltos;
    });
  }

  conteoReporteVideos(): void {
    this.reporteVideo.obtenerConteoVideos().subscribe(data => {
      this.reportesVideosPendientes = data.pendientes;
      this.reportesVideosResueltos = data.resueltos;
    });

  }
  conteoReporteUsuarios(): void {
    this.reporteUsuario.obtenerConteoUsuarios().subscribe(data => {
      this.reportesUsuariosPendientes = data.pendientes;
      this.reportesUsuariosResueltos = data.resueltos;
    });

  }


  cargarReportesComentarios(): void {
    this.reporteComentario.obtenerReportesDeComentarios().subscribe(
      data => {
        this.reportesComentarios = data.reportes; 
        console.log('Reportes de comentarios:', this.reportesComentarios);
      },
      error => {
        console.error('Error al obtener los reportes de comentarios:', error);
      }
    );
  }
  
  cargarReportesVideos(): void {
    this.reporteVideo.obtenerReportesDeVideos().subscribe(
      data => {
        this.reportesVideos = data.reportes; 
        console.log('Reportes de videos:', this.reportesVideos);
      },
      error => {
        console.error('Error al obtener los reportes de videos:', error);
      }
    );
  }
  
  cargarReportesUsuarios(): void {
    this.reporteUsuario.obtenerReportesDeUsuarios().subscribe(
      data => {
        this.reportesUsuarios = data.reportes; 
        console.log('Reportes de usuarios:', this.reportesUsuarios);
      },
      error => {
        console.error('Error al obtener los reportes de usuarios:', error);
      }
    );
  }

  verReportes(tipo: string): void {
    if (tipo === 'comentarios') {
      this.router.navigate(['/reportes/comentarios']);
    } else if (tipo === 'videos') {
      this.router.navigate(['/reportes/videos']);
    } else if (tipo === 'usuarios') {
      this.router.navigate(['/reportes/usuarios']);
    }
  }


 obtenerUltimosTresReportes(arrayReportes: any[]) {
    return arrayReportes.slice(0, 3);
  }
}
