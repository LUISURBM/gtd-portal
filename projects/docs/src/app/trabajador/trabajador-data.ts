export interface Trabajador {
  id: number;
  numeroDocumento?: number;
  codigoTrabajador?: number;
  primerNombre?: string;
  otrosNombres?: string;
  primerApellido?: string;
  segundoApellido?: string;
}

export const VALUES_WORKER: Trabajador[] = [
  {
    id: 1,
    numeroDocumento: 1030,
    codigoTrabajador: 1516,
    primerNombre: 'Luis',
    otrosNombres: 'Felipe',
    primerApellido: 'Urbina',
    segundoApellido: 'Moreno',
  },
  {
    id: 2,
    numeroDocumento: 1037,
    codigoTrabajador: 6969,
    primerNombre: 'John',
    otrosNombres: 'Bayron',
    primerApellido: 'Ocampo',
    segundoApellido: 'Fonnegra',
  },
  {
    id: 4,
    numeroDocumento: 1227,
    codigoTrabajador: 4469,
    primerNombre: 'Ever',
    otrosNombres: 'Yesid',
    primerApellido: 'Acevedo',
    segundoApellido: 'Taborda',
  },
];

export const MENU_ITEMS = [
  {
    state: '/trabajador/form',
    name: 'General trabajador',
    type: 'link',
    icon: 'work',
    emoji: '1F468',
  },
];

export const displayedColumns: string[] = [
  'id',
  'numeroDocumento',
  'codigoTrabajador',
  'nombre',
  'action',
];
