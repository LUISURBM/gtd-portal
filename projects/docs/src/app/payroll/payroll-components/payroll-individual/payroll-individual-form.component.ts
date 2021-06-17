import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { animationsForm } from '../../../animations/form-animation';
import { NavigationService } from '../../../srv/navigation.service';
import { TrabajadoresService } from '../../../srv/payroll/api/rest/trabajadores.service';
import { gtdArrayToLowerCase } from '../../../types/common-types';
import { catalogs } from '../payroll-general/payroll-data';
@Component({
  selector: 'app-payroll-individual-form-dialog',
  templateUrl: './payroll-individual-form.component.html',
  animations: animationsForm,
})
export class PayrollIndividualFormComponent implements OnInit {
  position = 'below';
  @ViewChild('formView') formView: any;
  @Input() form: FormGroup;
  catalogs = catalogs;
  trabajadores: any[] = [];
  state = 'open';
  subscriptions: Subscription[] = [];

  constructor(
    public builder: FormBuilder,
    private route: ActivatedRoute,
    public navSrv: NavigationService,
    public http: HttpClient,
    trabajadorAPISrv: TrabajadoresService
  ) {
    this.form = this.builder.group({
      id: 0,
      fechaInicio: new Date(),
      fechaFin: new Date(),
      cantidad: 0,
      pago: 0,
      catalog: catalogs[0],
      nombre: '',
      estado: '',
      trabajador: builder.group({
        id: builder.control(''),
        primerNombre: builder.control(''),
        sueldo: builder.control(0),
      }),
      deduccion: 0,
      devengos: 0,
      totalAPagar: 0,
      loading: undefined,
      nominaGeneralId: builder.control('')
    });
    this.route.params.subscribe((params) => {
      const data1 = params['data'];
      this.form.patchValue(data1);
    });

    this.subscriptions.push(
      trabajadorAPISrv
        .listtrabajadorUsingGET1('events', true, {
          httpHeaderAccept: 'application/json',
        })
        .subscribe({
          next: (data: any) => {
            this.loading((data?.type ?? 1) * 25);
            if (!data.body?.bodyDto) return;
            console.log(data.body?.bodyDto);
            this.trabajadores = gtdArrayToLowerCase(data.body?.bodyDto);
          },
          error: (error) => console.log(error),
        })
    );
  }

  request = (nominaIndividualId: string, trabajadorId: string): any => {
    return {
      body: {
        params: {
          businessSubscriptionId:
            '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
          nominaIndividualId: nominaIndividualId as Object,
          trabajadorId: trabajadorId as Object,
        },
      },
      header: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        esquema: 'payroll',
        procedimientoAlmacenado: 'ConsultarTrabajadorTest',
      },
    };
  };

  requestCatalogos: any = {
    body: {
      params: {
        codigoCatalogo: '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
      },
    },
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'ConsultarValoresCatalogosPorCodigoCatalogo',
    },
  };

  ngOnInit(): void {
    console.log(this.form.value);
  }

  onNoClick(): void {
    this.navSrv.navigate('nómina');
  }

  save() {}

  nav = (route: string) => this.navSrv.navigate(route);

  get f() {
    return this.form.controls;
  }

  changeState(): void {
    this.state == 'closed' ? (this.state = 'open') : (this.state = 'closed');
  }

  loading = (loading = 100) =>
    this.form.patchValue({ ...this.form.value, loading: loading });

  optionSelected(value: any) {
    console.log(value);
    this.form.patchValue({ ...this.form.value, trabajador: value})
  }
}
