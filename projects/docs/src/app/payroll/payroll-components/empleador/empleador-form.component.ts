import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catalogsDepartamentos, catalogsPaises } from './empleador-data';

@Component({
  selector: 'app-empleador-form-dialog',
  templateUrl: './empleador-form.component.html',
})
export class EmpleadorFormComponent {
  position = 'below';

  form: FormGroup;

  catalogsDepartamentos = catalogsDepartamentos;
  catalogsPaises = catalogsPaises;

  constructor(
    public dialogRef: MatDialogRef<EmpleadorFormComponent>,
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
