import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import { NotasService } from '../../../srv/payroll/rest/api';
import {
  gtdArrayToLowerCase,
  initTable,
  NgGtdDS,
} from '../../../types/common-types';
import { NotaFormComponent } from './nota-form.component';
import { displayedColumns, Nota } from './notas-data';

@Component({
  selector: 'app-payroll-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('formView') formView: any;
  form: FormGroup;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDate();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Nota>([]),
    displayedColumns: displayedColumns,
    loading: 0,
  });

  selection = new SelectionModel<Nota>(false, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  today = new Date();
  startDate = new Date(
    this.today.getFullYear(),
    this.today.getMonth() + 2,
    this.today.getDate()
  );

  get selected() {
    return this.selection?.selected[0] ?? { nota: '' };
  }

  request: any = {
    body: {
      params: {
        businessSubscriptionId:
          '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
      },
    },
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'obtenerListaNominaGeneral',
    },
  };

  subscriptions: Subscription[];

  constructor(
    public formBuilder: FormBuilder,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public navSrv: NavigationService,
    private notasAPISrv: NotasService,
    public menuItemsSrv: MenuItems
  ) {
    this.avance(0);
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
      nominaIndividualId: '',
    });
    this.avance(10);
    this.subscriptions = [
      this.listado().subscribe({
        next: this.leerListado,
        complete: this.avance,
        error: this.readResponseError,
      }),
    ];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  eliminar = (nota: Nota) =>
    this.notasAPISrv
      .deleteUsingDELETE59(nota.id, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .pipe(
        switchMap((response: any) => {
          if (response?.type !== 4) return of();
          if (
            response?.type === 4 &&
            response?.status === 200 &&
            response?.body?.bodyDto?.[0]
          ) {
            this._snackBar.open(`Nota`, 'eliminada!', {
              duration: 50000,
            });
            return this.listado();
          }
          this._snackBar.open(`Nota`, 'no eliminada!', {
            duration: 50000,
          });
          return of();
        })
      );
  listado = () => {
    this.avance(20);
    return of({});
  };
  readResponseError = (err: any) => {
    console.log(err);
  };
  leerListado = (data?: any) => {
    this.avance((data?.type ?? 1) * 15);
    if (!data.body) return;
    initTable(
      this.dataSource$,
      this.paginator,
      this.sort,
      gtdArrayToLowerCase(data?.body?.bodyDto),
      displayedColumns
    );
    this.avance(100);
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  add(nota: Nota): void {
    const validations = this.dataSource$.value.datasource.data
      .filter((n: Nota) => n.nota === nota.nota)
      .map((n: Nota) => {
        return n.nota === nota.nota ? `${nota.nota}' ya existe!` : undefined;
      });
    if (nota.nota.length < 1) {
      this._snackBar.open('Nota inválido', 'cerrar', { duration: 50000 });
      return;
    }
    if (validations.length > 0) {
      validations.forEach((m) =>
        this._snackBar.open(`${m}`, 'cerrar', { duration: 50000 })
      );
      return;
    }
    if (!nota) {
      return;
    }
    const request = {
      entidad: {
        notas: nota.nota,
        nominaIndividualId: this.form.value.nominaIndividualId,
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
      this.notasAPISrv
        .saveUsingPOST59(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`Nota`, 'creada!', {
                duration: 50000,
              });
            return this.listado();
          })
        )
        .subscribe({
          next: this.leerListado,
          complete: () => this.avance(92),
          error: this.readResponseError,
        })
    );
  }

  delete(nota: Nota): void {
    this.subscriptions.push(
      this.confirm(`¿Eliminar '${nota.nota}'!?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion ? this.eliminar(nota) : of()
          )
        )
        .subscribe({
          next: this.leerListado,
          complete: () => {
            nota.loading = undefined;
            this.avance;
          },
          error: this.readResponseError,
        })
    );
  }

  edit(nota: Nota): void {
    const request = {
      entidad: {
        notas: nota.nota,
        nominaIndividualId: this.form.value.nominaIndividualId,
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date().toISOString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
        id: nota.id,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };

    this.subscriptions.push(
      this.notasAPISrv
        .updateUsingPUT59(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((general) => {
            this._snackBar.open(`Nota`, 'actualizado!', {
              duration: 50000,
            });
            return this.listado();
          })
        )
        .subscribe({
          next: this.leerListado,
          complete: this.avance,
          error: this.readResponseError,
        })
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    let datasource = this.dataSource$.value.datasource;
    datasource.filter = filterValue.trim().toLowerCase();

    if (datasource.paginator) {
      datasource.paginator.firstPage();
    }
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  openDialog(nota?: Nota): void {
    const dialogRef = this.dialog.open(NotaFormComponent, {
      width: '500px',
      data: nota ?? { nota: '' },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        if (nota) nota.loading = undefined;
        if (result?.id) this.edit(result);
        else if (result) this.add(result);
      })
    );
  }

  closeDatePicker(eventData: any, dp?: any) {
    this.form.patchValue({ ...this.form.value, fechaCorte: eventData });
    dp.close();
  }

  loading: number | undefined = 0;
  avance = (loading?: number) => {
    this.loading = loading;
  };

  confirm(pregunta: string, titulo?: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        titulo: titulo,
        pregunta: pregunta,
      },
    });

    return dialogRef.afterClosed();
  }
}
