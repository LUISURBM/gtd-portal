import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { Trabajador, VALUES_WORKER } from '../../../trabajador/trabajador-data';
import { TableItem } from '../../../types/common-types';
import { Periodo, periodos } from '../periodo/periodo-data';

export interface Individual extends TableItem {
  id: string;
  periodo: Periodo;
  nombre: string;
  novedad: boolean;
  descripcion: string;
  trabajador: Trabajador;
  devengadosTotal?: number;
  deduccionesTotal?: number;
  comprobanteTotal?: number;
}

export const nominas: Individual[] = [
  {
    id: '1',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '2',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '3',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '4',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '5',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '6',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '7',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '8',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '9',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '10',
    periodo: periodos[0],
    nombre: '',
    novedad: false,
    descripcion: 'COMP',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '11',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '12',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '13',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '14',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '15',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '16',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '17',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '18',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '19',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
  {
    id: '20',
    periodo: periodos[0],
    nombre: '',
    novedad: true,
    descripcion: 'COMU',
    trabajador: VALUES_WORKER[0],
  },
];

export const catalogs: ValuesCatalog[] = [
  { id: 1, code: 'COMP', name: 'Compuesta' },
  { id: 2, code: 'COMU', name: 'Comun' },
];

export const displayedColumns: string[] = [
  'trabajador',
  'novedad',
  'action',
];
