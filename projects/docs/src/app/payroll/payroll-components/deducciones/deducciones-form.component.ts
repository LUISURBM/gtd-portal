import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NavigationService } from '../../../srv/navigation.service';
import { StoredProcedureService } from '../../../srv/payroll/api/procedure/storedProcedure.service';
@Component({
  selector: 'app-deducciones-form',
  styleUrls: ['./deducciones.component.scss'],
  templateUrl: './deducciones-form.component.html',
})
export class DeduccionesFormComponent {
  @ViewChild('formView') formView: any;
  position = 'below';

  form: FormGroup;
  constructor(
    public builder: FormBuilder,
    private route: ActivatedRoute,
    public navSrv: NavigationService,
    private storedProcedureAPISrv: StoredProcedureService
  ) {
    this.form = this.builder.group({
      id: builder.control(''),
      nominaIndividualId: builder.control(''),
      pensionVoluntaria: builder.control(0),
      retencionFuente: builder.control(0),
      afc: builder.control(0),
      cooperativa: builder.control(0),
      embargoFiscal: builder.control(0),
      planComplementarios: builder.control(0),
      educacion: builder.control(0),
      reintegro: builder.control(0),
      deuda: builder.control(0),
      anticipos: builder.array([]),
    });

    this.route.params
      .pipe(
        switchMap((params) => {
          const data = JSON.parse(params['data']);

          const request: any = {
            body: {
              params: {
                trabajadorId: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943' as Object,
                nominaIndividualId: data['nominaIndividualId'] as Object,
              },
            },
            header: {
              cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
              esquema: 'payroll',
              procedimientoAlmacenado: 'ConsultarDeduccionesTest',
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
          console.dir(data);
          if (!data?.body?.body) return;
          let newarray = data?.body?.body?.map((element: any) => {
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

          this.form.patchValue(newarray[0]);
        },
        error: (error) => console.log(error),
      });
  }

  onNoClick(): void {}

  save() {}

  get f() {
    return this.form.controls;
  }
}
