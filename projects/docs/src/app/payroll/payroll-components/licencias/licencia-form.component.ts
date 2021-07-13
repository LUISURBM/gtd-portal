import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { StoredProcedureService } from '../../../srv/payroll/rest/api';
import { gtdDateTime, gtdDate } from '../../../types/common-types';
import { catalogs } from './licencia-data';
@Component({
  selector: 'app-licencia-form-dialog',
  templateUrl: './licencia-form.component.html',
})
export class LicenciaFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs: any = [];
  requestCatalogos: any = {
    body: {
      params: {
        codigoCatalogo: 'LicenciasNE' as Object,
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

  subscriptions: Subscription[] = [];

  leerCatalogos = (data?: any) => {
    if (!data.body?.body) return;
    this.catalogs = data.body?.body;
  };
  constructor(
    public dialogRef: MatDialogRef<LicenciaFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storedProcedureAPISrv: StoredProcedureService,
    public builder: FormBuilder
  ) {
    this.subscriptions = [
      this.catalogos.subscribe({
        next: this.leerCatalogos,
        error: (err: any) => console.log(err),
      }),
    ];
    this.form = this.builder.group({
      id: 0,
      fechaInicio: this.builder.control(gtdDate(new Date())),
      fechaFin: this.builder.control(gtdDate(new Date())),
      cantidad: 0,
      pago: 0,
      catalog: '',
      valueCatalogType: '',
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
