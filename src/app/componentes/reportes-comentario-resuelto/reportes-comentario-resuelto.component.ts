import { Component } from '@angular/core';
import { ReporteComentariosService } from '../../servicios/reporte-comentarios.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalleReportecomentarioModalComponent } from '../../modales/detalle-reportecomentario-modal/detalle-reportecomentario-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmacionEliminarComponent } from '../../modales/confirmacion-eliminar/confirmacion-eliminar.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-reportes-comentario-resuelto',
  templateUrl: './reportes-comentario-resuelto.component.html',
  styleUrl: './reportes-comentario-resuelto.component.css'
})
export class ReportesComentarioResueltoComponent {


  constructor(private reporteService: ReporteComentariosService, public dialog: MatDialog, private snackBar: MatSnackBar, private titleService: Title ) {}

  reportes: any[] = [];

  ngOnInit(): void {
    this.obtenerReportes();
    this.titleService.setTitle("Reportes resueltos de comentarios - Blitzvideo Moderadores")

  }


  obtenerReportes(): void {
    this.reporteService.obtenerReporteDeComentariosResueltos().subscribe(
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
      (detalle) => {
        console.log('Detalle del reporte:', detalle);
  
        const reporte = this.reportes.find(reporte => reporte.id === reporteId);
        
        if (reporte) {
          this.dialog.open(DetalleReportecomentarioModalComponent, {
            data: reporte 
          });
        } else {
          console.error('Reporte no encontrado');
        }
      },
      (error) => {
        console.error('Error al obtener el detalle:', error);
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