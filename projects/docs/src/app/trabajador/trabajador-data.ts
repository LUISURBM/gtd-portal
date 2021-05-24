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
];
