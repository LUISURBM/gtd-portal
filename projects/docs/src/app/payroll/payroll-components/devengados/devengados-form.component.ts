import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NavigationService } from '../../../srv/navigation.service';
import { StoredProcedureService } from '../../../srv/payroll/api/procedure/storedProcedure.service';
@Component({
  selector: 'app-devengados-form',
  styleUrls: ['./devengados.component.scss'],
  templateUrl: './devengados-form.component.html',
})
export class DevengadosFormComponent {
  @ViewChild('formView') formView: any;

  position = 'below';

  form: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
    public builder: FormBuilder,
    private route: ActivatedRoute,
    public navSrv: NavigationService,
    public http: HttpClient,
    private storedProcedureAPISrv: StoredProcedureService
  ) {
    this.form = this.builder.group({
      id: builder.control(0),
      basicoId: builder.control(1),
      primasId: builder.control(1),
      cesantiasId: builder.control(1),
      dotacion: builder.control(0),
      apoyoSost: builder.control(0),
      teletrabajo: builder.control(0),
      bonifRetiro: builder.control(0),
      indemnizacion: builder.control(0),
      reintegro: builder.control(1),
      basico: builder.group({
        diasTrabajados: builder.control(12),
        sueldoTrabajado: builder.control(34),
      }),
    });

    this.subscriptions.push(
      this.route.params
        .pipe(
          switchMap((params) => {
            const data = JSON.parse(params['data']);
            this.form.patchValue(data);

            const request: any = {
              body: {
                params: {
                  trabajadorId:
                    'FF841F95-5FDC-4879-A6BD-EE8C93A82943' as Object,
                  nominaIndividualId: data['nominaIndividualId'] as Object,
                },
              },
              header: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                esquema: 'payroll',
                procedimientoAlmacenado: 'ConsultarDevengadosTest',
              },
            };

            return storedProcedureAPISrv.exectuteProcedureUsingPOST(
              request,
              'events',
              true
            );
          })
        )
        .subscribe({
          next: (data: any) => {
            console.log(data);
            if (
              data?.type === 4 &&
              data?.status == 200 &&
              data?.body?.bodyDto
            ) {
              if (!data?.body?.body) return;
              let newarray = data?.body?.bodyDto?.map((element: any) => {
                var key,
                  keys = Object.keys(element);
                var n = keys.length;
                var newobj: any = {};
                while (n--) {
                  key = keys[n];
                  newobj[key.toLowerCase()] = element[key];
                }
                return newobj;
              });

              this.form.patchValue({
                ...newarray[0],
                nominaIndividualId: this.form.value.nominaIndividualId,
                fechaCorte: this.form.value.fechaCorte,
              });
            }
          },
          error: (error) => console.log(error),
        })
    );
  }

  onNoClick(): void {}

  save() {}

  get f() {
    return this.form.controls;
  }
}
