import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../shared/dialog/confirm/confirm-dialog.component';

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
  paginator: any,
  sort: any,
  newarray: any,
  displayedColumns: any
) => {
  let datasource = new MatTableDataSource<any>(newarray);
  if (paginator) {
    paginator._intl.itemsPerPageLabel = 'Ver';
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
      if (key.toLowerCase().split('fecha').length > 1) {
        element[key] = new Date(element[key]);
      }
      newobj[`${key.charAt(0).toLowerCase()}${key.substr(1, key.length)}`] =
        element[key];
    }
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
  return dialogRef.afterClosed();
};

export const OpenDialog = (dialog: MatDialog, cmp: any, data: any) =>
  dialog
    .open(cmp, {
      hasBackdrop: false,
      width: '500px',
      data: data,
    })
    .afterClosed();

export const requestProcedure = (nominaIndividualId:string, trabajadorId:string) => {
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
}};
