import { Component } from '@angular/core';
import { ReporteComentariosService } from '../../servicios/reporte-comentarios.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetalleReportecomentarioModalComponent } from '../../modales/detalle-reportecomentario-modal/detalle-reportecomentario-modal.component';
import { ConfirmacionEliminarComponent } from '../../modales/confirmacion-eliminar/confirmacion-eliminar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reportes-comentarios',
  templateUrl: './reportes-comentarios.component.html',
  styleUrls: ['./reportes-comentarios.component.css']
})
export class ReportesComentariosComponent {
  constructor(
    private reporteService: ReporteComentariosService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private titleService: Title
  ) {}

  reportes: any[] = [];

  ngOnInit(): void {
    this.obtenerReportes();
    this.titleService.setTitle("Reportes por resolver de comentarios - Blitzvideo Moderadores")

  }

  obtenerReportes(): void {
    this.reporteService.obtenerReporteDeComentariosNoResueltos().subscribe(
      (data) => {
        this.reportes = data.reportes; 
        console.log(this.reportes);
       
      },
      (error) => {
        console.error('Error al obtener los reportes', error);
      }
    );
  }

  verDetalle(reporteId: number): void {
    this.reporteService.getDetalleReporte(reporteId).subscribe(
      (reporte) => {
        console.log('Detalle del reporte:', reporte);
        this.dialog.open(DetalleReportecomentarioModalComponent, {
          data: reporte.reportes 
        });
      
      },
      (error) => {
        console.error('Error al obtener el detalle:', error);      
      }
    );
  }

  marcarComoResuelto(reporteId: number): void {
    this.reporteService.marcarResuelto(reporteId).subscribe(
      () => {
        alert('Reporte marcado como resuelto.');
        this.obtenerReportes();
        this.snackBar.open('Reporte marcado como resuelto', 'Cerrar', {
          duration: 3000,
        });
      },
      (error) => {
        console.error('Error al marcar como resuelto:', error);
        this.snackBar.open('Error al marcar como resuelto', 'Cerrar', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  borrarReporte(reporteId: number): void {
    const dialogRef = this.dialog.open(ConfirmacionEliminarComponent); 
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reporteService.borrarReporte(reporteId).subscribe(
          () => {
            this.snackBar.open('Reporte borrado con éxito', 'Cerrar', {
              duration: 3000,
            });
            this.obtenerReportes();
          },
          (error) => {
            this.snackBar.open('Error al borrar el reporte', 'Cerrar', {
              duration: 3000,
              panelClass: ['error-snackbar']
            });
          }
        );
      } else {
        this.snackBar.open('Operación cancelada', 'Cerrar', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }
}
