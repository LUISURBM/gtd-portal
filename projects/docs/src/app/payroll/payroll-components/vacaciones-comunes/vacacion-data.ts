import { MatTableDataSource } from '@angular/material/table';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { formatToDate } from '../../../values-catalog';

export interface Vacacion {
  id: string;
  fechaInicio: string;
  fechaFin: string;
  cantidad: number;
  pago: number;
  catalog: string;
  valueCatalogName?: string;
  prevValueCatalogName?: string;
}

export const vacaciones: Vacacion[] = [
  {
    id: '1',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '2',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '3',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '4',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '5',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '6',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '7',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '8',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '9',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '10',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMP',
  },
  {
    id: '11',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
  {
    id: '12',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
  {
    id: '13',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
  {
    id: '14',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
  {
    id: '15',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
  {
    id: '16',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
  {
    id: '17',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
  {
    id: '18',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
  {
    id: '19',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
  {
    id: '20',
    fechaInicio: ('5/17/2021'),
    fechaFin: ('5/17/2021'),
    pago: 1298,
    cantidad: 1,
    catalog: 'COMU',
  },
];

export const catalogs: ValuesCatalog[] = [
  { id: 1, code: 'COMP', name: 'Compensada' },
  { id: 2, code: 'COMU', name: 'Común' },
];

export const displayedColumns: string[] = [
  'catalog',
  'pago',
  'cantidad',
  'fechaInicio',
  'fechaFin',
  'action',
];

export const EMPTY = {
  id: '',
  fechaInicio: new Date(),
  fechaFin: new Date(),
  pago: 0,
  cantidad: 0,
  catalog: '',
};
