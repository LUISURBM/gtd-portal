import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { StoredProcedureService } from '../../../srv/payroll/api/storedProcedure.service';
import { NavigationService } from '../../../srv/navigation.service';
@Component({
  selector: 'app-devengados-form',
  styleUrls: ['./devengados.component.scss'],
  templateUrl: './devengados-form.component.html',
})
export class DevengadosFormComponent {
  @ViewChild("formView") formView:any;

  position = 'below';

  form: FormGroup;

  private payrollDataUrl = environment.API_GATEWAY;

  constructor(public builder: FormBuilder, private route: ActivatedRoute, public navSrv: NavigationService
    ,public http: HttpClient
    ,private storedProcedureAPISrv: StoredProcedureService
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

    this.route.queryParams.subscribe((params) => {
      const data1 = params['data'];
      this.form.patchValue(data1);
    });

    const request: any = {
      body: {
        params: {
          trabajadorId: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943' as Object,
          nominaIndividualId: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943' as Object,
        },
      },
      header: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        esquema: 'payroll',
        procedimientoAlmacenado: 'ConsultarDevengadosTest',
      },
    };

    storedProcedureAPISrv
      .exectuteProcedureUsingPOST(request, 'events', true, {
        // httpHeaderAccept: 'application/json',
      })
      .subscribe((data:any) => {
        console.dir(data);
        let newarray = data?.body.map((element: any) => {
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

        this.form.patchValue(data);
      });

    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: '82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68',
      }),
    };
    // this.http
    //   .post<any>(
    //     this.payrollDataUrl + 'documents/payrolls/procedure',
    //     request,
    //     httpOptions
    //   )
    //   .subscribe((data: any) => {

    //   });
  }

  onNoClick(): void {}

  save() {}

  get f() {
    return this.form.controls;
  }
}
