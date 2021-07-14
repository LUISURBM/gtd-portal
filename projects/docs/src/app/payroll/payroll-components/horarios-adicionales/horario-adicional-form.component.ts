import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { StoredProcedureService } from '../../../srv/payroll/rest/api';
import { gtdDateTime, gtdDateTimeInput } from '../../../types/common-types';

@Component({
  selector: 'app-horario-adicional-form-dialog',
  templateUrl: './horario-adicional-form.component.html',
})
export class HorarioAdicionalFormComponent {
  position = 'below';

  form: FormGroup;
  catalogs: any = [];
  requestCatalogos: any = {
    body: {
      params: {
        codigoCatalogo: 'HorariosAdicionalesNE' as Object,
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
    public dialogRef: MatDialogRef<HorarioAdicionalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public builder: FormBuilder,
    private storedProcedureAPISrv: StoredProcedureService
  ) {
    this.form = this.builder.group({
      id: this.builder.control(''),
      cantidad: this.builder.control(0),
      pago: this.builder.control(0),
      porcentaje: this.builder.control(0),
      horaInicio: this.builder.control(gtdDateTimeInput(new Date())),
      horaFin: this.builder.control(gtdDateTimeInput(new Date())),
      valueCatalogType: this.builder.control('HEDS', [Validators.required]),
    });

    this.subscriptions = [
      this.catalogos.subscribe({
        next: this.leerCatalogos,
        error: (err: any) => console.log(err),
      }),
    ];
    if (data) this.form.patchValue(data);
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
