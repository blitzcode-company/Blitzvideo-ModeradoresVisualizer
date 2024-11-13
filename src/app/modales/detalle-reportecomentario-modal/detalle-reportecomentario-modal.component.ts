import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReporteComentariosService } from '../../servicios/reporte-comentarios.service';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';  

@Component({
  selector: 'app-detalle-reportecomentario-modal',
  templateUrl: './detalle-reportecomentario-modal.component.html',
  styleUrls: ['./detalle-reportecomentario-modal.component.css']
})
export class DetalleReportecomentarioModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DetalleReportecomentarioModalComponent>,
    @Inject(MAT_DIALOG_DATA) public reporte: any,
    public reporteService: ReporteComentariosService,
  ) {
  }

  aplicacionBlitzvideo = environment.aplicacionBlitzvideo;

  onClose(): void {
    this.dialogRef.close();
  }

  bloquearComentario(): void {
    this.reporteService.bloquearDesbloquearComentario(this.reporte.comentario_id, 'bloquear').subscribe(
      (response) => {
        console.log('Comentario bloqueado correctamente:', response);
        this.dialogRef.close();
       
        window.location.reload();
      
      },
      (error) => {
        console.error('Error al bloquear el comentario:', error);
       
      }
    );
  }

  desbloquearComentario(): void {
    this.reporteService.bloquearDesbloquearComentario(this.reporte.comentario_id, 'desbloquear').subscribe(
      (response) => {
        console.log('Comentario desbloqueado correctamente:', response);
        this.dialogRef.close();
      
        window.location.reload();
       
      },
      (error) => {
        console.error('Error al desbloquear el comentario:', error);
      
      }
    );
  }
}
