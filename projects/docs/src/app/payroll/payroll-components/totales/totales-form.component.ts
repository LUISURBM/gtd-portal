import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-totales-card-form',
  templateUrl: './totales-form.component.html',
})
export class TotalesFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TotalesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: 0,
      deduccion: 0,
      devengos: 0,
      totalAPagar: 0
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
