import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReporteUsuariosService } from '../../servicios/reporte-usuarios.service';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';  

@Component({
  selector: 'app-detalle-reporteusuario-modal',
  templateUrl: './detalle-reporteusuario-modal.component.html',
  styleUrl: './detalle-reporteusuario-modal.component.css'
})
export class DetalleReporteusuarioModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DetalleReporteusuarioModalComponent>,
    @Inject(MAT_DIALOG_DATA) public reporte: any,
    public reporteService: ReporteUsuariosService,
  ) {
  }

  aplicacionBlitzvideo = environment.aplicacionBlitzvideo;

  onClose(): void {
    this.dialogRef.close();
  }

  bloquearUsuario(): void {
    this.reporteService.bloquearDesbloquearUsuario(this.reporte.reportado.id, 'bloquear').subscribe(
      (response) => {
        console.log('Usuario bloqueado correctamente:', response);
        this.dialogRef.close();
       
        window.location.reload();
      
      },
      (error) => {
        console.error('Error al bloquear el usuario:', error);
       
      }
    );
  }

  desbloquearUsuario(): void {
    this.reporteService.bloquearDesbloquearUsuario(this.reporte.reportado.id, 'desbloquear').subscribe(
      (response) => {
        console.log('Usuario desbloqueado correctamente:', response);
        this.dialogRef.close();
      
        window.location.reload();
       
      },
      (error) => {
        console.error('Error al desbloquear el comentario:', error);
      
      }
    );
  }
}
