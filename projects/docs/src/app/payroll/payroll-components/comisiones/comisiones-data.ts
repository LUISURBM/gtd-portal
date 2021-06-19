export interface Comision {
  id: string;
  comision: number;
}

export const comisiones: Comision[] = [
  {
    id: '1',
    comision: 2021,
  },
  {
    id: '2',
    comision: 2021,
  },
  {
    id: '3',
    comision: 2021,
  },
  {
    id: '4',
    comision: 2021,
  },
  {
    id: '5',
    comision: 2021,
  },
];

export const displayedColumns: string[] = ['id', 'comision', 'action'];
