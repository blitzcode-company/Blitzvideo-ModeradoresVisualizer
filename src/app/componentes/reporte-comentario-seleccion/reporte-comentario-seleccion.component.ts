import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-reporte-comentario-seleccion',
  templateUrl: './reporte-comentario-seleccion.component.html',
  styleUrl: './reporte-comentario-seleccion.component.css'
})
export class ReporteComentarioSeleccionComponent {


  constructor(private router: Router, private titleService: Title) {}

ngOninit() {
  this.titleService.setTitle("Seleccion de reporte de comentario - Blitzvideo Moderadores")
}

  verReportesNoResueltos() {
    this.router.navigate(['/reportes/comentarios/no-resueltos']);
  }

  verReportesResueltos() {
    this.router.navigate(['/reportes/comentarios/resueltos']);
  }

}
