import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { gtdDate } from '../../../types/common-types';
@Component({
  selector: 'app-huelga-form-dialog',
  templateUrl: './huelga-form.component.html',
})
export class HuelgaFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<HuelgaFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: 0,
      fechaInicio: new Date(),
      fechaFin: new Date(),
      cantidad: 0,
    });
    this.form.patchValue({
      ...data,
      fechaInicio: gtdDate(data?.fechaInicio),
      fechaFin: gtdDate(data?.fechaFin),
    });
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
