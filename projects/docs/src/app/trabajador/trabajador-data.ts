export interface Trabajador {
  id: string;
  numeroDocumento?: string;
  codigoTrabajador?: string;
  primerNombre?: string;
  otrosNombres?: string;
  primerApellido?: string;
  segundoApellido?: string;
  activo?: boolean;
  altoRiesgoPension?: boolean;
  lugarTrabajoDepartamentoEstado?: string;
  lugarTrabajoDireccion?: string;
  lugarTrabajoMunicipioCiudad?: string;
  lugarTrabajoPais?: string;
  salarioIntegral?: boolean;
  subTipoTrabajador?: string;
  sueldo?: number;
  tipoContrato?: string;
  tipoDocumento?: string;
  tipoTrabajador?: string;
  pais?: string;
  departamento?: string;
  ciudad?: string;
}

export const VALUES_WORKER: Trabajador[] = [
  {
    id: '1',
    numeroDocumento: '1030',
    codigoTrabajador: '1516',
    primerNombre: 'Luis',
    otrosNombres: 'Felipe',
    primerApellido: 'Urbina',
    segundoApellido: 'Moreno',
  },
  {
    id: '2',
    numeroDocumento: '1037',
    codigoTrabajador: '6969',
    primerNombre: 'John',
    otrosNombres: 'Bayron',
    primerApellido: 'Ocampo',
    segundoApellido: 'Fonnegra',
  },
  {
    id: '4',
    numeroDocumento: '1227',
    codigoTrabajador: '4469',
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
    emoji: '1F465',
  },
];

export const displayedColumns: string[] = [
  'numeroDocumento',
  'codigoTrabajador',
  'nombre',
  'action',
];
