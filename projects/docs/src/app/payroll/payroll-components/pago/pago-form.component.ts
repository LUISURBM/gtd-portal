import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catalogsMetodos, catalogsTiposCuenta } from './pago-data';

@Component({
  selector: 'app-pago-form-dialog',
  templateUrl: './pago-form.component.html',
})
export class PagoFormComponent {
  position = 'below';

  form: FormGroup;

  catalogsMetodos = catalogsMetodos;
  catalogsTiposCuenta = catalogsTiposCuenta;

  constructor(
    public dialogRef: MatDialogRef<PagoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: this.builder.control(0),
      forma: this.builder.control(0),
      banco: this.builder.control(''),
      numeroCuenta: this.builder.control(''),
      tipoCuenta: this.builder.control(''),
      metodo: this.builder.control(1),
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
