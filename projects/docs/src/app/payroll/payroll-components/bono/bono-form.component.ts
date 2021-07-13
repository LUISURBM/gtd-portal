import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-bono-form-dialog',
  templateUrl: './bono-form.component.html',
})
export class BonoEPCTVFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BonoEPCTVFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: this.builder.control(''),
      pagoAlimentacionNs: this.builder.control(0),
      pagoAlimentacionS: this.builder.control(0),
      pagoNs: this.builder.control(0),
      pagoS: this.builder.control(0),
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
