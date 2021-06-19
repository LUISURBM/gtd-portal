export interface OtraDeduccion {
  id: string;
  otraDeduccion: number;
}

export const otrasDeducciones: OtraDeduccion[] = [
  {
    id: '1',
    otraDeduccion: 1123,
  },
  {
    id: '2',
    otraDeduccion: 1123,
  },
  {
    id: '3',
    otraDeduccion: 1123,
  },
  {
    id: '4',
    otraDeduccion: 1123,
  },
  {
    id: '5',
    otraDeduccion: 1123,
  },
];

export const displayedColumns: string[] = ['id', 'otraDeduccion', 'action'];

export const EMPTY = {
  id: '',
  otraDeduccion: 0,
};
