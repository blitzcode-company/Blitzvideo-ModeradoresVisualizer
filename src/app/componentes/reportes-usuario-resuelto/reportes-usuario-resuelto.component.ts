import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalleReporteusuarioModalComponent } from '../../modales/detalle-reporteusuario-modal/detalle-reporteusuario-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReporteUsuariosService } from '../../servicios/reporte-usuarios.service';
import { ConfirmacionEliminarComponent } from '../../modales/confirmacion-eliminar/confirmacion-eliminar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reportes-usuario-resuelto',
  templateUrl: './reportes-usuario-resuelto.component.html',
  styleUrl: './reportes-usuario-resuelto.component.css'
})
export class ReportesUsuarioResueltoComponent {

  constructor(private reporteService: ReporteUsuariosService, public dialog: MatDialog,  private snackBar: MatSnackBar, private titleService: Title) {}

  reportes: any[] = [];

  ngOnInit(): void {
    this.obtenerReportes();
    this.titleService.setTitle("Reportes resueltos de usuarios - Blitzvideo Moderadores")

  }

  obtenerReportes(): void {
    this.reporteService.obtenerReporteDeUsuarioResueltos().subscribe(
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
          this.dialog.open(DetalleReporteusuarioModalComponent, {
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
