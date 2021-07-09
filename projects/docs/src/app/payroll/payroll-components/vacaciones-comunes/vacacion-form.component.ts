import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppStateService } from '../../../srv/app-state.service';
import { gtdDate, gtdTime } from '../../../types/common-types';
import { catalogs } from './vacacion-data';
@Component({
  selector: 'app-vacacion-form-dialog',
  templateUrl: './vacacion-form.component.html',
})
export class VacacionFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs = catalogs;

  constructor(
    public stateSrv: AppStateService,
    public dialogRef: MatDialogRef<VacacionFormComponent>,
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
      valueCatalogName: '',
    });
    this.form.patchValue({
      ...data,
      fechaInicio: gtdTime(data.fechaInicio),
      fechaFin: gtdTime(data.fechaFin),
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
