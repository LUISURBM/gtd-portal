import { ValuesCatalog } from '../../../srv/in-mem-data-service';

export interface LugarGeneracionXML {
  id: number;
  departamentoEstado?: number;
  idioma?: string;
  municipioCiudad?: number;
  pais?: string;
}

export const lugaresGeneracionXML: LugarGeneracionXML[] = [
  {
    id: 1,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 2,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 3,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 4,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 5,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 6,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 7,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 8,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 9,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 10,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 11,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 12,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 13,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 14,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 15,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 16,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 17,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 18,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 19,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
  {
    id: 20,
    departamentoEstado: 12,
    idioma: 'ES',
    municipioCiudad: 56,
    pais: 'CO',
  },
];

export const displayedColumns: string[] = [
  'id',
  'departamentoEstado',
  'idioma',
  'municipioCiudad',
  'pais',
  'action',
];

export const catalogsCiudades: ValuesCatalog[] = [
  { id: 1, code: 'BOG', name: 'Bogotá' },
  { id: 2, code: 'PC', name: 'Puerto Cabello' },
];
export const catalogsDepartamentos: ValuesCatalog[] = [
  { id: 1, code: 'CUND', name: 'Cundinamarca' },
  { id: 2, code: 'CB', name: 'Carabobo' },
];
export const catalogsPaises: ValuesCatalog[] = [
  { id: 1, code: 'CO', name: 'Colombia' },
  { id: 2, code: 'VE', name: 'Venezuela' },
];
export const catalogsIdiomas: ValuesCatalog[] = [
  { id: 1, code: 'ES', name: 'Español' },
  { id: 2, code: 'EN', name: 'Inglés' },
];

export const EMPTY = {
  id: 0,
  departamentoEstado: 0,
  idioma: 'ES',
  municipioCiudad: 1,
  pais: 'CO',
};
