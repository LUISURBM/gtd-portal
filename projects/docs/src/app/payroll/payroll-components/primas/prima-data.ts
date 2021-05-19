export interface Prima {
  id: number;
  cantidad: number;
  pagoNS: number;
  pagoS: number;
}

export const primas: Prima[] = [
  {
    id: 1,
    cantidad: 1298,
    pagoNS: 98.1,
    pagoS: 98.1,
  },
  {
    id: 2,
    cantidad: 1298,
    pagoNS: 98.1,
    pagoS: 98.1,
  },
  {
    id: 3,
    cantidad: 1298,
    pagoNS: 98.1,
    pagoS: 98.1,
  },
  {
    id: 4,
    cantidad: 1298,
    pagoNS: 98.1,
    pagoS: 98.1,
  },
  {
    id: 5,
    cantidad: 1298,
    pagoNS: 98.1,
    pagoS: 98.1,
  },
];

export const displayedColumns: string[] = ['id', 'cantidad', 'pagoNS', 'pagoS', 'action'];


export const EMPTY = {
  id: 0,
  cantidad: 0,
  pagoNS: 0,
  pagoS: 0,
};
