export interface Bonificacion {
  id: string;
  bonificacionNs?: number;
  bonificacionS?: number;
}

export const bonificaciones: Bonificacion[] = [
  {
    id: '1',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '2',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '3',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '4',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '5',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '6',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '7',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '8',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '9',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '10',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '11',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '12',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '13',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '14',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '15',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '16',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '17',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '18',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '19',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
  {
    id: '20',
    bonificacionNs: 12,
    bonificacionS: 34,
  },
];

export const displayedColumns: string[] = [
  'bonificacionNs',
  'bonificacionS',
  'action',
];

export const EMPTY = {
  id: '',
  bonificacionNs: 0,
  bonificacionS: 0,
} as Bonificacion;
