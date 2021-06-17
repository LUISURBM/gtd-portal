import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  position = 'below';

  titulo = 'Confirmar';
  pregunta = '¿Confirma?';

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.titulo = data?.titulo;
    this.pregunta = data?.pregunta;
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  save() {
    this.dialogRef.close(true);
  }
}
