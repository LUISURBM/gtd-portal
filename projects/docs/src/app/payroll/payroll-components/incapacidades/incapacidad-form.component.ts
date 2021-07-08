import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { StoredProcedureService } from '../../../srv/payroll/rest/api';
@Component({
  selector: 'app-incapacidad-form-dialog',
  templateUrl: './incapacidad-form.component.html',
})
export class IncapacidadFormComponent {
  position = 'below';
  catalogs: any = [];

  requestCatalogos: any = {
    body: {
      params: {
        codigoCatalogo: 'IncapacidadNE' as Object,
      },
    },
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'ConsultarValoresCatalogosPorCodigoCatalogo',
    },
  };
  catalogos = this.storedProcedureAPISrv.exectuteProcedureUsingPOST1(
    this.requestCatalogos,
    'events',
    true,
    { httpHeaderAccept: 'application/json' }
  );
  form: FormGroup;
  subscriptions: Subscription[] = [];

  leerCatalogos = (data?: any) => {
    if (!data.body?.body) return;
    this.catalogs = data.body?.body?.map((vc: any) => {
      return { ...vc, name: JSON.parse(vc.name) };
    });
  };

  constructor(
    public dialogRef: MatDialogRef<IncapacidadFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder,
    private storedProcedureAPISrv: StoredProcedureService
  ) {
    this.subscriptions = [
      this.catalogos.subscribe({
        next: this.leerCatalogos,
        error: (err: any) => console.log(err),
      }),
    ];
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
