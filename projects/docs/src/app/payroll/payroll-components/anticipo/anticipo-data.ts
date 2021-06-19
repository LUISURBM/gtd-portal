import { formatToDate } from '../../../values-catalog';

export interface Anticipo {
  id: string;
  anticipo: number;
}

export const anticipos: Anticipo[] = [
  {
    id: '1',
    anticipo: 123.45,
  },
  {
    id: '2',
    anticipo: 123.45,
  },
  {
    id: '3',
    anticipo: 123.45,
  },
  {
    id: '4',
    anticipo: 123.45,
  },
];

export const displayedColumns: string[] = ["id", "valor", "action"];
