import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-video-seleccion',
  templateUrl: './reporte-video-seleccion.component.html',
  styleUrl: './reporte-video-seleccion.component.css'
})
export class ReporteVideoSeleccionComponent {
  
  constructor(private router: Router, private titleService:Title) {}

  ngOnInit() {
    this.titleService.setTitle("Seleccion de reporte de usuario - Blitzvideo Moderadores")
  }

  verReportesNoResueltos() {
    this.router.navigate(['/reportes/videos/no-resueltos']);
  }

  verReportesResueltos() {
    this.router.navigate(['/reportes/videos/resueltos']);
  }
}
