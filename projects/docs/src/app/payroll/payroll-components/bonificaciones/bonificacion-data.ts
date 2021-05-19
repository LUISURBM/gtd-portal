export interface Bonificacion {
  id: number;
  bonificacionNS?: number;
  bonificacionS?: number;
}

export const bonificaciones: Bonificacion[] = [
  {
    id: 1,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 2,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 3,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 4,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 5,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 6,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 7,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 8,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 9,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 10,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 11,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 12,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 13,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 14,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 15,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 16,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 17,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 18,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 19,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
  {
    id: 20,
    bonificacionNS: 12,
    bonificacionS: 34,
  },
];

export const displayedColumns: string[] = [
  'id',
  'bonificacionNS',
  'bonificacionS',
  'action',
];

export const EMPTY = {
  id: 0,
  bonificacionNS: 0,
  bonificacionS: 0,
} as Bonificacion;
