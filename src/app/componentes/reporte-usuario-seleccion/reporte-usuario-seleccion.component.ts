import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reporte-usuario-seleccion',
  templateUrl: './reporte-usuario-seleccion.component.html',
  styleUrl: './reporte-usuario-seleccion.component.css'
})
export class ReporteUsuarioSeleccionComponent {

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Seleccion de reporte de usuario - Blitzvideo Moderadores")
  }


  verReportesNoResueltos() {
    this.router.navigate(['/reportes/usuarios/no-resueltos']);
  }

  verReportesResueltos() {
    this.router.navigate(['/reportes/usuarios/resueltos']);
  }

}
