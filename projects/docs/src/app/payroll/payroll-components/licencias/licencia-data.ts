import { MatTableDataSource } from '@angular/material/table';
import { UrlString } from '@azure/msal-browser';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { formatToDate } from '../../../values-catalog';

export interface Licencia {
  id: string;
  fechaInicio: string;
  fechaFin: string;
  cantidad: number;
  pago: number;
  valueCatalogType: string;
}

export const licencias: Licencia[] = [
  {
    id: '1',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '2',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '3',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '4',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '5',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '6',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '7',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '8',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '9',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '10',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '11',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '12',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '13',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '14',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '15',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '16',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '17',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '18',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '19',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '20',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
];

export const EMPTY = {
  id: '',
  fechaInicio: ('5/17/2021'),
  fechaFin: ('5/17/2021'),
  pago: 0,
  cantidad: 0,
  valueCatalogType: 'COMU',
};
export const catalogs: ValuesCatalog[] = [
  { id: 1, code: 'COMP', name: 'Compuesta' },
  { id: 2, code: 'COMU', name: 'Comun' },
];

export const displayedColumns: string[] = [
  'catalog',
  'pago',
  'cantidad',
  'fechaInicio',
  'fechaFin',
  'action',
];
