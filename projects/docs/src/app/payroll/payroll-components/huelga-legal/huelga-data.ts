import { MatTableDataSource } from '@angular/material/table';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { formatToDate } from '../../../values-catalog';

export interface Huelga {
  id: number;
  fechaInicio: Date;
  fechaFin: Date;
  cantidad: number;
}

export const huelgas: Huelga[] = [
  {
    id: 1,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 2,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 3,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 4,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 5,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 6,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 7,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 8,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 9,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 10,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 11,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 12,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 13,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 14,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 15,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 16,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 17,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 18,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 19,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
  {
    id: 20,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
    cantidad: 1,
  },
];

export const displayedColumns: string[] = [
  'id',
  'cantidad',
  'fechaInicio',
  'fechaFin',
  'action',
];

