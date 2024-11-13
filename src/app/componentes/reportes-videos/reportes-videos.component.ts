import { Component } from '@angular/core';
import { ReporteVideosService } from '../../servicios/reporte-videos.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalleReporteModalComponent } from '../../modales/detalle-reporte-modal/detalle-reporte-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';  
import { ConfirmacionEliminarComponent } from '../../modales/confirmacion-eliminar/confirmacion-eliminar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reportes-videos',
  templateUrl: './reportes-videos.component.html',
  styleUrl: './reportes-videos.component.css'
})
export class ReportesVideosComponent {

  constructor(private reporteService: ReporteVideosService, public dialog: MatDialog, private snackBar: MatSnackBar, private titleService: Title) {}

  reportes: any[] = [];

  ngOnInit(): void {
    this.obtenerReportes();
    this.titleService.setTitle("Reportes resueltos de videos - Blitzvideo Moderadores")

  }

  obtenerReportes(): void {
    this.reporteService.obtenerReporteDeVideoNoResueltos().subscribe(
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
          this.dialog.open(DetalleReporteModalComponent, {
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

  marcarComoResuelto(reporteId: number): void {
    this.reporteService.marcarResuelto(reporteId).subscribe(
      () => {
        this.snackBar.open('Reporte marcado como resuelto', 'Cerrar', {
          duration: 3000,
        });
        this.obtenerReportes();
      },
      (error) => {
        this.snackBar.open('Error al marcar el reporte como resuelto', 'Cerrar', {
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
