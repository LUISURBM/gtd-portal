import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, iif, of, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { animationsForm } from '../../../animations/form-animation';
import { DirtyComponent } from '../../../guards/dirty-check.guard';
import { NavigationService } from '../../../srv/navigation.service';
import {
  NominasIndividualesService,
  TrabajadoresService,
} from '../../../srv/payroll/rest/api';
import {
  confirm,
  gtdArrayToLowerCase,
  gtdBeforeUnload,
  gtdIsNull,
  gtdNombreCompleto,
  gtdScrollEvent,
} from '../../../types/common-types';
import { catalogs } from '../payroll-general/payroll-data';
@Component({
  selector: 'app-payroll-individual-form-dialog',
  templateUrl: './payroll-individual-form.component.html',
  animations: animationsForm,
  host: {
    '[class.className]' : 'col-4',
  }
})
export class PayrollIndividualFormComponent implements OnInit, DirtyComponent {
  position = 'below';
  @ViewChild('formView') formView: any;
  @Input() form: FormGroup;
  catalogs = catalogs;
  trabajadores: any[] = [];
  state = 'open';
  subscriptions: Subscription[] = [];
  isDirty$: BehaviorSubject<boolean>;

  constructor(
    public builder: FormBuilder,
    private route: ActivatedRoute,
    public navSrv: NavigationService,
    public http: HttpClient,
    trabajadorAPISrv: TrabajadoresService,
    nominaIndividualAPISrv: NominasIndividualesService,
    public dialog: MatDialog
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
        sueldo: builder.control(''),
      }),
      deduccion: 0,
      devengos: 0,
      totalAPagar: 0,
      loading: builder.control(undefined),
      nominaGeneralId: builder.control(''),
    });
    this.isDirty$ = new BehaviorSubject<boolean>(false);
    this.subscriptions.push(
      this.isDirty$.subscribe({
        next: (d) => console.log(`💤 ${d} dirty form `),
      }),
      this.form.valueChanges.subscribe({
        complete: () => this.isDirty$.next(this.form.dirty),
      }),
      this.route.params
        .pipe(
          switchMap((params) => {
            const data = JSON.parse(params['data']);
            this.form.patchValue(data, { emitEvent: false });
            if (data['nominaIndividualId'] === undefined)
              return of(this.form.value);
            return nominaIndividualAPISrv.findByIdUsingGET58(
              data['nominaIndividualId'],
              'events',
              true,
              {
                httpHeaderAccept: 'application/json',
              }
            );
          })
        )
        .subscribe({
          next: (data: any) => {
            console.log(data);
            if (data?.type === 4 && data?.status == 200 && data?.body?.bodyDto)
              this.form.patchValue({
                ...data?.body?.bodyDto,
                trabajador: {
                  id: data?.body?.bodyDto?.trabajador?.id,
                  primerNombre: gtdNombreCompleto(
                    data?.body?.bodyDto?.trabajador
                  ),
                  sueldo: data?.body?.bodyDto?.trabajador?.sueldo ?? '0',
                },
                nominaGeneralId: this.form.value.nominaGeneralId,
                fechaCorte: this.form.value.fechaCorte,
              });
          },
          error: (err: any) => {
            console.log(err);
          },
        }),
      trabajadorAPISrv
        .listtrabajadorUsingGET1('events', true, {
          httpHeaderAccept: 'application/json',
        })
        .subscribe({
          next: (data: any) => {
            if (!data.body?.bodyDto) return;
            console.log(data.body?.bodyDto);
            this.trabajadores = gtdArrayToLowerCase(data.body?.bodyDto);
          },
          error: (error: any) => console.log(error),
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
    this.subscriptions.push(
      gtdBeforeUnload()
        .pipe(filter(() => this.form.dirty))
        .subscribe((e) => {
          const message = 'You may lose your data if you refresh now';
          const event = e || (window.event as any);
          event.returnValue = !!message;
          return message;
        }),

      gtdScrollEvent().subscribe({ next: console.log })
    );
  }

  onNoClick(): void {
    this.navSrv.navigate('nómina');
  }

  save() {}

  nav = (route: string) => this.navSrv.navigate(route);

  get f() {
    return this.form.controls;
  }
  get trabajador() {
    return this.form.controls['trabajador'];
  }

  changeState(): void {
    this.state == 'closed' ? (this.state = 'open') : (this.state = 'closed');
  }

  loading = (loading?: boolean) =>
    this.form.patchValue({ ...this.form.value, loading: loading });

  optionSelected(value: any) {
    console.log(value);
    this.form.patchValue({
      ...this.form.value,
      trabajador: {
        id: value.id,
        primerNombre: gtdNombreCompleto(value),
        sueldo: value.sueldo,
      },
    });
  }
  cierraTrabajador() {
    return gtdIsNull(this.form.value.id)
      ? ''
      : this.form.value.trabajador.primerNombre;
  }

  sueldoTrabajador() {
    return this.trabajador.value.sueldo;
  }
}
