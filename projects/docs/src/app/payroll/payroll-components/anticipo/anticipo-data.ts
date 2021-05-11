import { formatToDate } from '../../../values-catalog';

export interface Anticipo {
  id: number;
  anticipo: number;
  fecha?: Date;
}

export const anticipos: Anticipo[] = [
  {
    id: 1,
    anticipo: 123.45,
    fecha: formatToDate('5/17/2021'),
  },
  {
    id: 2,
    anticipo: 123.45,
    fecha: formatToDate('5/17/2021'),
  },
  {
    id: 3,
    anticipo: 123.45,
    fecha: formatToDate('5/17/2021'),
  },
  {
    id: 4,
    anticipo: 123.45,
    fecha: formatToDate('5/17/2021'),
  },
];
