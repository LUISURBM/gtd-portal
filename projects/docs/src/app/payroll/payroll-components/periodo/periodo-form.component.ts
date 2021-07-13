import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppStateService } from '../../../srv/app-state.service';

@Component({
  selector: 'app-periodo-form-dialog',
  templateUrl: './periodo-form.component.html',
})
export class PeriodoFormComponent {
  position = 'below';

  form: FormGroup;

  constructor(
    public stateSrv: AppStateService,
    public dialogRef: MatDialogRef<PeriodoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.form = this.builder.group({
      id: this.builder.control(''),
      fechaGen: this.builder.control(new Date()),
      fechaIngreso: this.builder.control(new Date()),
      fechaLiquidacion: this.builder.control(new Date()),
      fechaLiquidacionInicio: this.builder.control(new Date()),
      fechaLiquidacionFin: this.builder.control(new Date()),
      fechaRetiro: this.builder.control(new Date()),
      tiempoLaborado: this.builder.control(6),
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
