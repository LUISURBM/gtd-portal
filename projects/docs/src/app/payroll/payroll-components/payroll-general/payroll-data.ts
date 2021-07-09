import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { formatToDate } from '../../../values-catalog';
import { Periodo } from '../periodo/periodo-data';

export interface Payroll {
  id: string;
  fechaCorte: string;
  nombre: string;
  estado: string;
  descripcion: string;
  loading?: number;
}

export const nominas: Payroll[] = [
  {
    id: '1',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '2',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '3',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '4',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '5',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '6',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '7',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '8',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '9',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '10',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMP',
    descripcion: 'COMP',
  },
  {
    id: '11',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: '12',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: '13',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: '14',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: '15',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: '16',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: '17',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: '18',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: '19',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
  {
    id: '20',
    fechaCorte: ('5/17/2021'),
    nombre: '',
    estado: 'COMU',
    descripcion: 'COMU',
  },
];

export const catalogs: ValuesCatalog[] = [
  { id: 1, code: '487C190C-F0F3-4E4E-9B60-A959C2124CCE', name: 'Borrador' },
  { id: 2, code: '487C190C-F0F3-4E4E-9B60-A959C2124CCE', name: 'Comun' },
  { id: 2, code: '487C190C-F0F3-4E4E-9B60-A959C2124CCE', name: 'Preaprobada' },
  { id: 2, code: '487C190C-F0F3-4E4E-9B60-A959C2124CCE', name: 'Enviada' },
  { id: 2, code: '487C190C-F0F3-4E4E-9B60-A959C2124CCE', name: 'Aceptada DIAN' },
];

export const displayedColumns: string[] = [
  'fechaCorte',
  'nombre',
  'action',
];

export const EMPTY = {
  id: 0,
  fechaCorte: new Date().toISOString(),
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
