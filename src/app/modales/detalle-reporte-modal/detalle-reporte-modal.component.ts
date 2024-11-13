import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReporteVideosService } from '../../servicios/reporte-videos.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-detalle-reporte-modal',
  templateUrl: './detalle-reporte-modal.component.html',
  styleUrl: './detalle-reporte-modal.component.css'
})
export class DetalleReporteModalComponent {
  aplicacionBlitzvideo = environment.aplicacionBlitzvideo

  constructor(
    public dialogRef: MatDialogRef<DetalleReporteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public reporte: any,
    public reporteService: ReporteVideosService
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  bloquearVideo(): void {
    this.reporteService.bloquearDesbloquearVideo(this.reporte.video_id, 'bloquear').subscribe(
      (response) => {
        console.log('Video bloqueado correctamente:', response);
        this.dialogRef.close(); 
        window.location.reload(); 

      },
      (error) => {
        console.error('Error al bloquear el video:', error);
      }
    );
  }

  desbloquearVideo(): void {
    this.reporteService.bloquearDesbloquearVideo(this.reporte.video_id, 'desbloquear').subscribe(
      (response) => {
        console.log('Video desbloqueado correctamente:', response);
        this.dialogRef.close(); 
        window.location.reload(); 

      },
      (error) => {
        console.error('Error al desbloquear el video:', error);
      }
    );
  }

}
