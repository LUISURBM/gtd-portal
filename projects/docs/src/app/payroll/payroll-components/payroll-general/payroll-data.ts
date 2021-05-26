import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { Periodo, periodos } from '../periodo/periodo-data';

export interface Payroll {
  id: number;
  periodo: Periodo;
  nombre: string;
  estado: string;
  descripcion: string;
}

export const nominas: Payroll[] = [
  {
    id: 1,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 2,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 3,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 4,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 5,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 6,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 7,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 8,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 9,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 10,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 11,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 12,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 13,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 14,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 15,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 16,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 17,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 18,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 19,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 20,
    periodo: periodos[0],
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
];

export const catalogs: ValuesCatalog[] = [
  { id: 1, code: 'COMP', name: 'Compuesta' },
  { id: 2, code: 'COMU', name: 'Comun' },
];

export const displayedColumns: string[] = [
  'id',
  'estado',
  'nombre',
  'descripcion',
  'periodo',
  'action'
];

export const EMPTY = {
  id: 0,
  periodo: new Date(),
  nombre: '',
  estado: '1',
  descripcion: '',
};



export const MENU_ITEMS = [
  { state: '/nómina/individual/form', name: 'Nómina Individual', type: 'link', icon: 'work' },
  { state: '/nómina/individual/devengos', name: 'Devengos', type: 'link', icon: 'paid' },
  { state: '/nómina/individual/deducciones', name: 'Deducciones', type: 'link', icon: 'local_atm' },
];
