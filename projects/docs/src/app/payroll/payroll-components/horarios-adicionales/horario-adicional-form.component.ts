import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catalogs } from './horario-adicional-data';

@Component({
  selector: 'app-horario-adicional-form-dialog',
  templateUrl: './horario-adicional-form.component.html',
})
export class HorarioAdicionalFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs = catalogs;
  constructor(
    public dialogRef: MatDialogRef<HorarioAdicionalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group(data);
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
