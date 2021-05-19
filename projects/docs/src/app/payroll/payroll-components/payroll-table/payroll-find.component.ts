import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catalogs } from './payroll-data';
@Component({
  selector: 'app-payroll-find-dialog',
  templateUrl: './payroll-find.component.html',
})
export class PayrollFindComponent {
  position = 'below';

  form: FormGroup;
  catalogs = catalogs;

  constructor(
    public dialogRef: MatDialogRef<PayrollFindComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: 0,
      fechaInicio: new Date(),
      fechaFin: new Date(),
      cantidad: 0,
      pago: 0,
      catalog: catalogs[0],
      nombre: '',
      estado: '',
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
