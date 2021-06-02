import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { formatToDate } from '../../../values-catalog';
import { Periodo } from '../periodo/periodo-data';

export interface Payroll {
  id: number;
  fechaCorte: Date;
  nombre: string;
  estado: string;
  descripcion: string;
}

export const nominas: Payroll[] = [
  {
    id: 1,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 2,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 3,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 4,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 5,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 6,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 7,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 8,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 9,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 10,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: 11,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 12,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 13,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 14,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 15,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 16,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 17,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 18,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 19,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: 20,
    fechaCorte: formatToDate('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
];

export const catalogs: ValuesCatalog[] = [
  { id: 1, code: 'BORR', name: 'Borrador' },
  { id: 2, code: 'COMU', name: 'Comun' },
  { id: 2, code: 'PREA', name: 'Preaprobada' },
  { id: 2, code: 'ENVI', name: 'Enviada' },
  { id: 2, code: 'ACEP', name: 'Aceptada DIAN' },
];

export const displayedColumns: string[] = [
  'id',
  'estado',
  'nombre',
  'descripcion',
  'fechaCorte',
  'action',
];

export const EMPTY = {
  id: 0,
  fechaCorte: new Date(),
  nombre: '',
  estado: '1',
  descripcion: '',
};

export const MENU_ITEMS = [
  {
    state: '/nómina/form',
    name: 'Nómina Individual',
    type: 'link',
    icon: 'work',
  },
  { state: '/nómina/devengos', name: 'Devengos', type: 'link', icon: 'paid' },
  {
    state: '/nómina/deducciones',
    name: 'Deducciones',
    type: 'link',
    icon: 'local_atm',
  },
  {
    state: '/nómina/totales',
    name: 'Totales',
    type: 'link',
    icon: 'attach_money',
  },
];
