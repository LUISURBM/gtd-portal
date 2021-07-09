import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AppStateService } from '../../../srv/app-state.service';
import { StoredProcedureService } from '../../../srv/payroll/rest/api';
import { catalogs } from './salud-pension-sindicato-data';
@Component({
  selector: 'app-salud-pension-sindicato-form-dialog',
  templateUrl: './salud-pension-sindicato-form.component.html',
})
export class SaludPensionSindicatoFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs: any[] = [];

  requestCatalogos: any = {
    body: {
      params: {
        codigoCatalogo: 'DeduccionesAdicionalesNE' as Object,
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
    public stateSrv: AppStateService,
    public dialogRef: MatDialogRef<SaludPensionSindicatoFormComponent>,
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
