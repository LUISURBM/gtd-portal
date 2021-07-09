export interface Prima {
  id: string;
  cantidad: number;
  pagoNs: number;
  pago: number;
  loading?: boolean;
}

export const primas: Prima[] = [
  {
    id: '1',
    cantidad: 1298,
    pagoNs: 98.1,
    pago: 98.1,
  },
  {
    id: '2',
    cantidad: 1298,
    pagoNs: 98.1,
    pago: 98.1,
  },
  {
    id: '3',
    cantidad: 1298,
    pagoNs: 98.1,
    pago: 98.1,
  },
  {
    id: '4',
    cantidad: 1298,
    pagoNs: 98.1,
    pago: 98.1,
  },
  {
    id: '5',
    cantidad: 1298,
    pagoNs: 98.1,
    pago: 98.1,
  },
];

export const displayedColumns: string[] = ['cantidad', 'pagoNs', 'pago', 'action'];


export const EMPTY = {
  id: '',
  cantidad: 0,
  pagoNs: 0,
  pago: 0,
};
