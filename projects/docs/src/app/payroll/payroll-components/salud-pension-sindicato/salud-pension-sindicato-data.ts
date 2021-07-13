import { ValuesCatalog } from '../../../srv/in-mem-data-service';

export interface SaludPensionSindicato {
  id: string;
  deduccion?: number;
  porcentaje?: number;
  catalog: string | undefined;
  valueCatalogType?: string;
}

export const saludPensionSindicatos: SaludPensionSindicato[] = [
  {
    id: '1',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '2',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '3',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '4',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '5',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '6',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '7',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '8',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '9',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '10',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '11',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '12',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '13',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '14',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '15',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '16',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '17',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '18',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '19',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
  {
    id: '20',
    deduccion: 12,
    porcentaje: 34,
    catalog: 'SindicatoNI',
  },
];

export const displayedColumns: string[] = [
  'deduccion',
  'porcentaje',
  'catalog',
  'action',
];

export const EMPTY = {
  id: '',
  deduccion: 0,
  porcentaje: 0,
  valueCatalogType: '',
};

export const catalogs: ValuesCatalog[] = [
  { id: 1, code: 'SaludNI', name: 'Salud' },
  { id: 2, code: 'SindicatoNI', name: 'Sindicato' },
];

export const catalogosSaludPensionSindicatoReq: any = {
  body: {
    params: {
      codigoCatalogo: 'DeduccionesAdicionalesNE' as Object,
    },
  },
  header: {
    cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
    esquema: 'payroll',
    procedimientoAlmacenado: 'ConsultarValoresCatalogosPorCodigoCatalogo',
  },
};
