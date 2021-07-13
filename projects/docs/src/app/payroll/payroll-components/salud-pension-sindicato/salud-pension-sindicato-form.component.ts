import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AppStateService } from '../../../srv/app-state.service';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
@Component({
  selector: 'app-salud-pension-sindicato-form-dialog',
  templateUrl: './salud-pension-sindicato-form.component.html',
})
export class SaludPensionSindicatoFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs: ValuesCatalog[] = [];

  subscriptions: Subscription[] = [];
  constructor(
    public stateSrv: AppStateService,
    public dialogRef: MatDialogRef<SaludPensionSindicatoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder
  ) {
    this.subscriptions = [];
    this.form = this.builder.group({
      id: this.builder.control(''),
      deduccion: this.builder.control(0),
      porcentaje: this.builder.control(0),
      valueCatalogType: this.builder.control(''),
      ruta: this.builder.group({
        id: this.builder.control(''),
        name: this.builder.control(''),
        emoji: this.builder.control(''),
      }),
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
