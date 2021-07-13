import { formatDate, formatNumber } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../shared/dialog/confirm/confirm-dialog.component';
import { ValuesCatalog } from '../srv/in-mem-data-service';
import { TrabajadorDto } from '../srv/payroll/model/trabajadorDto';

export enum NgGtdThemes {
  FpiSkin = 'fpi-skin-black',
  FpiSkinBlack = 'fpi-skin-alt',
  NeGtd = 'default-theme',
  NeGtdBlack = 'default-theme-black',
  UnicornLightTheme = 'unicorn-theme',
  UnicornDarkTheme = 'unicorn-dark-theme',
  AltTheme = 'theme-alternate',
  AltThemeBlack = 'theme-alternate-black',
  GtdBlueGrey = 'gtd-blue',
  GtdBlueBlack = 'gtd-blue-black',
  // init angular css themes
  DeeppurpleAmber = 'deeppurple-amber',
  IndigoPink = 'indigo-pink',
  PinkBluegrey = 'pink-bluegrey',
  PurpleGreen = 'purple-green',
  // end angular css themes
}

export interface EnumObject {
  [enumValue: number]: string;
}

export interface EnumString {
  [enumValue: string]: ValuesCatalog;
}
export interface EnumCatalogs {
  [enumValue: string]: ValuesCatalog[];
}

export function getEnumValues(e: EnumObject): string[] {
  return Object.keys(e).map((i: any) => e[i]);
}

export function getEnumKeyByEnumValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string,
  predertermined: string = myEnum[0]
): keyof T {
  let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : predertermined;
}

export function getEnumValueByEnumKey<T extends { [index: string]: string }>(
  myEnum: T,
  enumKey: string,
  predertermined: string = myEnum[0]
): keyof T {
  let keys = Object.keys(myEnum).filter((x) => myEnum.name == enumKey);
  return keys.length > 0 ? myEnum[keys[0]] : predertermined;
}

export interface ValueOption {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  value: string;
  catalog: NgGtdThemes;
  alternate: NgGtdThemes;
}

export interface NgGtdDS {
  datasource: MatTableDataSource<any>;
  displayedColumns: string[];
  loading?: number;
}

export interface TableItem {
  loading?: boolean;
}
export const initTable = (
  dataSource$: any,
  paginator: MatPaginator,
  sort: any,
  newarray: any,
  displayedColumns: any
) => {
  let datasource = new MatTableDataSource<any>(newarray);
  if (paginator) {
    paginator._intl.itemsPerPageLabel = 'Ver';
    paginator._intl.previousPageLabel = 'Anterior';
    paginator._intl.firstPageLabel = 'Primero';
    paginator._intl.lastPageLabel = 'Último';
    paginator._intl.nextPageLabel = 'Siguiente';
    paginator._intl.getRangeLabel = (
      page: number,
      pageSize: number,
      length: number
    ) => `Página ${page + 1}`;
  }
  datasource.paginator = paginator;
  datasource.sort = sort;
  dataSource$.next({
    datasource: datasource,
    displayedColumns: displayedColumns,
    loading: 100,
  });
};
export const gtdArrayToLowerCase = (bodyDto: any[]) =>
  bodyDto?.map?.((element: any) => {
    var key,
      keys = Object.keys(element);
    var n = keys.length;
    var newobj: any = {};
    while (n--) {
      key = keys[n];
      if (!element[key]) continue;
      if (key.toLowerCase().split('fecha').length > 1) {
        element[key] = gtdDateTime(element[key]);
      } /* else if (typeof element[key] === 'number') {
        element[key] = numberWithCommas(element[key]);
      } */

      newobj[`${key.charAt(0).toLowerCase()}${key.substr(1, key.length)}`] =
        element[key];
    }
    try {
      newobj[`valueCatalogName`] = JSON.parse(newobj[`valueCatalogName`]);
    } catch (e) {}
    return newobj;
  });

export const confirm = (
  dialog: MatDialog,
  pregunta: string,
  titulo?: string
) => {
  const dialogRef = dialog.open(ConfirmDialogComponent, {
    width: '350px',
    data: {
      titulo: titulo,
      pregunta: pregunta,
    },
  });
  return dialogRef.afterClosed().pipe(take(1));
};

export const OpenDialog = (dialog: MatDialog, cmp: any, data: any) =>
  dialog
    .open(cmp, {
      hasBackdrop: true,
      backdropClass: 'gtd-overlay-backdrop',
      closeOnNavigation: true,
      disableClose: true,
      width: '500px',

      data: data,
    })
    .afterClosed();

export const requestProcedure = (
  nominaIndividualId: string,
  trabajadorId: string
) => {
  return {
    body: {
      params: {
        nominaIndividualId: nominaIndividualId as Object,
        trabajadorId: trabajadorId as Object,
      },
    },
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'ConsultarDevengadosTest',
    },
  };
};

export const gtdIsNull = (data: any) =>
  data === undefined ||
  data === null ||
  data === 'null' ||
  data === 'undefined';

export const gtdNombreCompleto = (trabajador: TrabajadorDto) =>
  `${trabajador?.primerNombre ?? ''} ${trabajador?.otrosNombres ?? ''} ${
    trabajador?.primerApellido ?? ''
  } ${trabajador?.segundoApellido ?? ''}`;

export const gtdSueldoTrabajador = (sueldo: string) =>
  formatNumber(Number(sueldo), 'es-CO', '1.2-2');

export const gtdBeforeUnload = () => fromEvent(window, 'beforeunload');
export const gtdDate = (value: number | string | Date = new Date()) =>
  formatDate(value, 'yyyy-MM-dd', 'es-Co');
export const gtdDateTime = (value: number | string | Date = new Date()) =>
  formatDate(value, 'yyyy-MM-ddThh:mm', 'es-Co');
export const numberWithCommas = (value: string) =>
  formatNumber(
    typeof value === 'number' ? value : +value?.replace(/\./g, '') ?? 0,
    'es-Co',
    '1.0-2'
  );
export const stringWithCommas = (value: string) =>
  (+value).toLocaleString('es-CO');
export const safeText = (value: string) => value?.replace(/[^\w\s]/gi, '');
export const gtdScrollEvent = () => fromEvent(window, 'scroll');
export const parseLocaleNumber = (stringNumber: string, locale: string) => {
  var thousandSeparator = Intl.NumberFormat(locale)
    .format(11111)
    .replace(/\p{Number}/gu, '');
  var decimalSeparator = Intl.NumberFormat(locale)
    .format(1.1)
    .replace(/\p{Number}/gu, '');

  return parseFloat(
    stringNumber
      .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
      .replace(new RegExp('\\' + decimalSeparator), '.')
  );
};
export const gtdExtractDataProcedure = (body: any) =>
  body.map((b: any) => {
    let valores: ValuesCatalog[] = [];
    var key = Object.keys(b)?.[0];
    const data = JSON.parse(b[key])?.[0];
    console.log(data);
    var keys = Object.keys(data);
    var n = keys.length;
    var newobj: any = {};
    while (n--) {
      var gtdMember = keys[n];
      var valor = data[gtdMember];
      if (Array.isArray(valor)) {
        valor.forEach((v, i) => {
          var keys1 = Object.keys(v);
          valores.push(
            ...keys1.map((k, y) => {
              return {
                id: keys.length - n + i + y,
                value: typeof v[k] === 'number' ? numberWithCommas(v[k]) : v[k],
                code: `${k}${gtdMember}`,
                name: `${gtdMember}: ${k}`,
                catalog: typeof v[k],
              };
            })
          );
        });
      } else if (typeof valor === 'object') {
        var keys1 = Object.keys(valor?.[0]);
        var y = keys1.length;
        while (y--) {
          if (keys1[y].toLocaleLowerCase().split('id').length > 1) continue;
          valores.push({
            id: y + 1,
            value: valor?.[0]?.[keys1[y]],
            code: `${key}${gtdMember}${keys1[y].charAt(0).toLowerCase()}${keys1[
              y
            ].substr(1, keys1[y].length)}`,
            name: `${gtdMember}: ${keys1[y].charAt(0).toLowerCase()}${keys1[
              y
            ].substr(1, keys1[y].length)}`,
            catalog: typeof valor?.[0]?.[keys1[y]],
          });
        }
      } else {
        if (gtdMember.toLocaleLowerCase().split('id').length > 1) continue;
        if (gtdMember.toLowerCase().split('fecha').length > 1) {
          valor = new Date(valor);
        }
        newobj[
          `${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(
            1,
            gtdMember.length
          )}`
        ] = valor;
        valores.push({
          id: n + 1,
          value: valor,
          code: `${key}${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(
            1,
            gtdMember.length
          )}`,
          name: `${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(
            1,
            gtdMember.length
          )}`,
          catalog: typeof valor,
        });
      }
    }
    return valores;
  })?.[0];

export const valoresCatalogos = (params: any) => {
  return {
    body: {
      params: params,
    },
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'ConsultarValoresCatalogosPorCodigoCatalogo',
    },
  };
};

export const txtEliminar = (texto: string, objeto: string) => {
  return `${texto.replace('P_1', objeto)}`;
};
