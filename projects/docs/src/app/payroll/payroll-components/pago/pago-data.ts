import { ValuesCatalog } from '../../../srv/in-mem-data-service';

export interface Pago {
  id: number;
  forma?: number;
  banco?: string;
  numeroCuenta?: string;
  tipoCuenta?: string;
  metodo?: number;
}

export const pagos: Pago[] = [
  {
    id: 1,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 2,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 3,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 4,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 5,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 6,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 7,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 8,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 9,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 10,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 11,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 12,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 13,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 14,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 15,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 16,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 17,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 18,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 19,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
  {
    id: 20,
    forma: 12,
    banco: 'string',
    numeroCuenta: 'string',
    tipoCuenta: 'string',
    metodo: 1,
  },
];

export const displayedColumns: string[] = [
  'forma',
  'banco',
  'numeroCuenta',
  'tipoCuenta',
  'metodo',
  'action',
];

export const EMPTY = {
  id: 0,
  forma: 0,
  banco: '',
  numeroCuenta: '',
  tipoCuenta: '',
  metodo: 1,
};

export const catalogsMetodos: ValuesCatalog[] = [
  { id: 1, code: 'EFEC', name: 'Efectivo' },
  { id: 2, code: 'DEB', name: 'Débito' },
];
export const catalogsTiposCuenta: ValuesCatalog[] = [
  { id: 1, code: 'HA', name: 'Ahorros' },
  { id: 2, code: 'CO', name: 'Corriente' },
];
