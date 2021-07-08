export interface PagoTercero {
  id: string;
  pagoTercero: number;
}

export const pagosTerceros: PagoTercero[] = [
  {
    id: '1',
    pagoTercero: 1123,
  },
  {
    id: '2',
    pagoTercero: 1123,
  },
  {
    id: '3',
    pagoTercero: 1123,
  },
  {
    id: '4',
    pagoTercero: 1123,
  },
  {
    id: '5',
    pagoTercero: 1123,
  },
];

export const displayedColumns: string[] = ['pagoTercero', 'action'];

export const EMPTY = {
  id: '',
  pagoTercero: 0,
};
