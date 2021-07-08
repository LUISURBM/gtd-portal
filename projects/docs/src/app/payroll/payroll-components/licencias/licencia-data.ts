import { MatTableDataSource } from '@angular/material/table';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { formatToDate } from '../../../values-catalog';

export interface Licencia {
  id: string;
  fechaInicio: Date;
  fechaFin: Date;
  cantidad: number;
  pago: number;
  valueCatalogType: string;
}

export const licencias: Licencia[] = [
  {
    id: '1',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '2',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '3',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '4',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '5',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '6',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '7',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '8',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '9',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '10',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMP',
  },
  {
    id: '11',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '12',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '13',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '14',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '15',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '16',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '17',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '18',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '19',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
  {
    id: '20',
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    valueCatalogType: 'COMU',
  },
];

export const EMPTY = {
  id: '',
  fechaInicio: formatToDate('5/17/2021'),
  fechaFin: formatToDate('5/17/2021'),
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
