import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmacion-eliminar',
  templateUrl: './confirmacion-eliminar.component.html',
  styleUrl: './confirmacion-eliminar.component.css'
})
export class ConfirmacionEliminarComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmacionEliminarComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);  
  }

  onCancel(): void {
    this.dialogRef.close(false);  
  }

}
