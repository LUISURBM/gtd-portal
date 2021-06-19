
export interface Compensacion {
  id: string;
  compensacionE?: number;
  compensacionO?: number;
}

export const compensaciones: Compensacion[] = [
  {
    id: '1',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '2',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '3',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '4',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '5',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '6',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '7',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '8',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '9',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '10',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '11',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '12',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '13',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '14',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '15',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '16',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '17',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '18',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '19',
    compensacionE: 12,
    compensacionO: 34,
  },
  {
    id: '20',
    compensacionE: 12,
    compensacionO: 34,
  },
];

export const displayedColumns: string[] = [
  'id',
  'compensacionE',
  'compensacionO',
  'action',
];

export const EMPTY = {
  id: '',
  compensacionE: 0,
  compensacionO: 0,
} as Compensacion;
