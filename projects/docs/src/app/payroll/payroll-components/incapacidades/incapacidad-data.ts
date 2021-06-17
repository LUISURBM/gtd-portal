import { formatToDate } from "../../../values-catalog";

export interface Incapacidad {
  id: string;
  cantidad?: number;
  pago?: number;
  tipo?: number;
  fechaInicio?: Date;
  fechaFin?: Date;
}

export const incapacidads: Incapacidad[] = [
  {
    id: '1',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '2',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '3',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '4',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '5',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '6',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '7',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '8',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '9',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '10',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '11',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '12',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '13',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '14',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '15',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '16',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '17',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '18',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '19',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
  {
    id: '20',
    cantidad: 12,
    pago: 34,
    tipo: 34,
    fechaInicio: formatToDate('5/17/2021'),
    fechaFin: formatToDate('5/17/2021'),
  },
];

export const displayedColumns: string[] = [
  'id',
  'cantidad',
  'pago',
  'tipo',
  'fechaInicio',
  'fechaFin',
  'action',
];

export const EMPTY = {
  id: 0,
  cantidad: 0,
  pago: 0,
  tipo: 0,
  fechaInicio: formatToDate('5/17/2021'),
  fechaFin: formatToDate('5/17/2021'),
};
