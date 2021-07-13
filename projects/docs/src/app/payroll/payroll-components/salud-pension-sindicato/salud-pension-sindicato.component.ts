import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppStateService } from '../../../srv/app-state.service';
import { InMemService } from '../../../srv/in-mem-service';
import { SaludPensionSindicatosService } from '../../../srv/payroll/rest/api';
import {
  confirm,
  gtdArrayToLowerCase,
  initTable,
  NgGtdDS,
  OpenDialog
} from '../../../types/common-types';
import { UICreado, UIEditado, UIEliminado } from '../../../values-catalog';
import {
  displayedColumns,
  EMPTY,
  SaludPensionSindicato
} from './salud-pension-sindicato-data';
import { SaludPensionSindicatoFormComponent } from './salud-pension-sindicato-form.component';

@Component({
  selector: 'app-payroll-salud-pension-sindicato',
  templateUrl: './salud-pension-sindicato.component.html',
  styleUrls: ['./salud-pension-sindicato.component.css'],
})
export class SaludPensionSindicatosComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  form: FormGroup;
  dataSource$?: BehaviorSubject<NgGtdDS>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  leerError = (err: any) => {
    console.log(err);
  };

  subscriptions: Subscription[] = [];

  listado = (data: any) =>
    this.saludPensionSindicatosAPISrv.listFindAllDeduccionesUsingGET7(
      data.deduccionesId,
      'events',
      true,
      {}
    );
  leerLista = (data: any, message?: string) => {
    this.loading((data?.type ?? 1) * 25);
    if (!data.body) return;
    initTable(
      this.dataSource$,
      this.paginator,
      this.sort,
      gtdArrayToLowerCase(
        data?.body?.bodyDto.filter(
          (dto: any) => dto.valueCatalogType === this.form.value.ruta.id
        )
      ),
      displayedColumns
    );
  };

  constructor(
    public stateSrv: AppStateService,
    public memSrv: InMemService,
    public dialog: MatDialog,
    public builder: FormBuilder,
    private route: ActivatedRoute,
    private saludPensionSindicatosAPISrv: SaludPensionSindicatosService
  ) {
    this.form = this.builder.group({
      filtro: '',
      fechaCorte: new Date(),
      nominaGeneralId: undefined,
      deduccionesId: undefined,
      ruta: this.builder.group({
        id: '',
        name: '',
        emoji: '',
      }),
    });
    this.subscriptions = [
      this.form.valueChanges
        .pipe(
          switchMap((data) => {
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.leerLista,
          complete: this.loading,
          error: this.leerError,
        }),

      this.route.params.subscribe((params) => {
        const data = JSON.parse(params['data']);
        console.log(data);
        this.dataSource$ = new BehaviorSubject<NgGtdDS>({
          datasource: new MatTableDataSource<SaludPensionSindicato>([]),
          displayedColumns: displayedColumns,
        });
        this.form.patchValue(data);
      }),
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  add(saludPensionSindicato: SaludPensionSindicato): void {
    if (!saludPensionSindicato) {
      return;
    }

    const request = {
      entidad: {
        id: undefined,
        deduccion: saludPensionSindicato.deduccion!,
        porcentaje: saludPensionSindicato.porcentaje!,
        valueCatalogType: this.form.value.ruta.id!,
        deduccionesId: this.form.value.deduccionesId,
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date().toDateString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
        cuneNov: '',
        novedad: false,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };
    this.subscriptions.push(
      this.saludPensionSindicatosAPISrv
        .saveUsingPOST68(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (response.type !== 4) return of();
            if (response.type === 4 && response.status == 200)
              this.stateSrv.message(`${this.form.value.ruta.name}`, UICreado);
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.leerLista,
          error: this.leerError,
        })
    );
  }

  delete(saludPensionSindicato: SaludPensionSindicato): void {
    this.subscriptions.push(
      confirm(this.dialog, `¿Eliminar ${this.form.value.ruta.name}?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.saludPensionSindicatosAPISrv.deleteUsingDELETE68(
                  saludPensionSindicato.id,
                  'events',
                  true,
                  {
                    httpHeaderAccept: 'application/json',
                  }
                )
              : of()
          ),
          switchMap((data: any) => {
            if (data.type !== 4) return of();
            if (data.type === 4 && data.status == 200)
              this.stateSrv.message(
                `${this.form.value.ruta.name}`,
                UIEliminado
              );
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: (data: any) => this.leerLista(data, 'eliminada!'),
          error: (err: any) => {
            console.log(err);
          },
        })
    );
  }

  edit(saludPensionSindicato: SaludPensionSindicato): void {
    const request = {
      entidad: {
        id: saludPensionSindicato.id,
        deduccion: saludPensionSindicato.deduccion!,
        porcentaje: saludPensionSindicato.porcentaje,
        valueCatalogType: this.form.value.ruta.id!,
        deduccionesId: this.form.value.deduccionesId,
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date().toISOString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };

    this.subscriptions.push(
      this.saludPensionSindicatosAPISrv
        .updateUsingPUT68(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (response.type !== 4) return of();
            if (response.type === 4 && response.status == 200)
              this.stateSrv.message(`${this.form.value.ruta.name}`, UIEditado);
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.leerLista,
          complete: this.loading,
          error: this.leerError,
        })
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(this.dataSource$ === undefined) return;
    let datasource = this.dataSource$.value.datasource;
    datasource.filter = filterValue.trim().toLowerCase();

    if (datasource.paginator) {
      datasource.paginator.firstPage();
    }
    this.dataSource$?.next({
      ...this.dataSource$?.value,
      datasource: datasource,
    });
  }

  openDialog(saludPensionSindicato?: SaludPensionSindicato): void {
    OpenDialog(
      this.dialog,
      SaludPensionSindicatoFormComponent,
      { ...saludPensionSindicato, ruta: this.form.value.ruta } ?? EMPTY
    ).subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }

  loading = (loading = 100) =>
    this.dataSource$?.next({ ...this.dataSource$?.value, loading: loading });
}
