import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catalogs } from './salud-pension-sindicato-data';
@Component({
  selector: 'app-salud-pension-sindicato-form-dialog',
  templateUrl: './salud-pension-sindicato-form.component.html',
})
export class SaludPensionSindicatoFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs = catalogs;
  constructor(
    public dialogRef: MatDialogRef<SaludPensionSindicatoFormComponent>,
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
