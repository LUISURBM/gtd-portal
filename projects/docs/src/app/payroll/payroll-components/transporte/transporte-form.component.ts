import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-transporte-form-dialog',
  templateUrl: './transporte-form.component.html',
})
export class TransporteFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TransporteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: 0,
      auxilioTransporte: 0,
      viaticoManutAlojNs: 0,
      viaticoManutAlojS: 0,
    });
    this.form.patchValue(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  get f() {
    return this.form.controls;
  }
}
