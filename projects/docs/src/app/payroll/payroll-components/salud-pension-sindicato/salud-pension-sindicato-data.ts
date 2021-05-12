import { ValuesCatalog } from '../../../srv/in-mem-data-service';

export interface SaludPensionSindicato {
  id: number;
  deduccion?: number;
  porcentaje?: number;
  catalog?: string;
}

export const saludPensionSindicatos: SaludPensionSindicato[] = [
  {
    id: 1,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 2,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 3,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 4,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 5,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 6,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 7,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 8,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 9,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 10,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 11,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 12,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 13,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 14,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 15,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 16,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 17,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 18,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 19,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: 20,
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
];

export const displayedColumns: string[] = [
  'id',
  'deduccion',
  'porcentaje',
  'catalog',
  'action',
];

export const EMPTY = {
  id: 0,
  deduccion: 0,
  porcentaje: 0,
  catalog: 'SindicatoNI',
};

export const catalogs: ValuesCatalog[] = [
  { id: 1, code: 'SaludNI', name: 'Salud' },
  { id: 2, code: 'SindicatoNI', name: 'Sindicato' },
];
