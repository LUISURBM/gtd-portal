import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { NavigationService } from '../../../srv/navigation.service';
import { StoredProcedureService } from '../../../srv/payroll/rest/api';
import { initTable, gtdArrayToLowerCase } from '../../../types/common-types';
import { displayedColumns } from './devengados-data';
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
  valores: ValuesCatalog[] = [];
  constructor(
    public builder: FormBuilder,
    private route: ActivatedRoute,
    public navSrv: NavigationService,
    public http: HttpClient,
    private storedProcedureAPISrv: StoredProcedureService
  ) {
    this.form = this.builder.group({});

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
                  nominaIndividualId:
                    'FE841F95-5FDC-4879-A6BD-EE8C93A82941' /* data['nominaIndividualId'] */ as Object,
                },
              },
              header: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                esquema: 'payroll',
                procedimientoAlmacenado: 'ConsultarDevengadosTest',
              },
            };

            return storedProcedureAPISrv.exectuteProcedureUsingPOST1(
              request,
              'events',
              true
            );
          })
        )
        .subscribe({
          next: (response: any) => {
            console.log(response);
            if (
              response?.type === 4 &&
              response?.status == 200 &&
              response?.body?.body
            ) {
              if (!response?.body?.body) return;
              response.body?.body?.forEach((b: any) => {
                var key = Object.keys(b)?.[0];
                const data = JSON.parse(b[key])?.[0];
                console.log(data);
                var keys = Object.keys(data);
                var n = keys.length;
                var newobj: any = {};

                while (n--) {
                  var gtdMember = keys[n];
                  var valor = data[gtdMember];
                  if (typeof valor === 'object') {
                    var keys1 = Object.keys(valor?.[0]);
                    var y = keys1.length;
                    while (y--) {
                      if (keys1[y].toLocaleLowerCase().split('id').length > 1)
                        continue;
                      this.valores.push({
                        id: y + 1,
                        value: valor?.[0]?.[keys1[y]],
                        code: `${key}${gtdMember}${keys1[y]
                          .charAt(0)
                          .toLowerCase()}${keys1[y].substr(
                          1,
                          keys1[y].length
                        )}`,
                        name: `${gtdMember}: ${keys1[y]
                          .charAt(0)
                          .toLowerCase()}${keys1[y].substr(
                          1,
                          keys1[y].length
                        )}`,
                        catalog: typeof valor?.[0]?.[keys1[y]],
                      });
                    }
                  } else {
                    if (gtdMember.toLocaleLowerCase().split('id').length > 1)
                      continue;
                    if (gtdMember.toLowerCase().split('fecha').length > 1) {
                      valor = new Date(valor);
                    }
                    newobj[
                      `${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(
                        1,
                        gtdMember.length
                      )}`
                    ] = valor;
                    this.valores.push({
                      id: n + 1,
                      value: valor,
                      code: `${key}${gtdMember
                        .charAt(0)
                        .toLowerCase()}${gtdMember.substr(
                        1,
                        gtdMember.length
                      )}`,
                      name: `${gtdMember
                        .charAt(0)
                        .toLowerCase()}${gtdMember.substr(
                        1,
                        gtdMember.length
                      )}`,
                      catalog: typeof valor,
                    });
                  }
                }
                console.log(data);
                console.log(this.valores);
                this.valores.forEach((v) => {
                  this.form.addControl(v.code!!, this.builder.control(v.value));
                });
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
