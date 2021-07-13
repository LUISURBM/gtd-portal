import { ValuesCatalog } from '../../../srv/in-mem-data-service';

export interface OtroConcepto {
  id: string;
  conceptoNs?: number;
  conceptoS?: number;
  descripcion?: string;
}

export const otrosConceptos: OtroConcepto[] = [
  {
    id: '1',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '2',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '3',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '4',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '5',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '6',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '7',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '8',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '9',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '10',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '11',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '12',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '13',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '14',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '15',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '16',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '17',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '18',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '19',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
  {
    id: '20',
    conceptoNs: 12,
    conceptoS: 34,
    descripcion: '56',
  },
];

export const displayedColumns: string[] = [
  'conceptoNs',
  'conceptoS',
  'descripcion',
  'action',
];

export const catalogs: ValuesCatalog[] = [
  { id: 1, code: 'COMP', name: 'Compuesta' },
  { id: 2, code: 'COMU', name: 'Comun' },
];

export const EMPTY = {
  id: '',
  conceptoNs: 0,
  conceptoS: 0,
  descripcion: '',
} as OtroConcepto;
