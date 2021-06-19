import { ValuesCatalog } from "../../../srv/in-mem-data-service";
import { formatToDate } from "../../../values-catalog";

export interface HorarioAdicional {
  id: string;
  cantidad?: number;
  pago?: number;
  porcentaje?: number;
  horaInicio?: Date;
  horaFin?: Date;
  catalog?: string;
}

export const HorariosAdicionales: HorarioAdicional[] = [
  {
    id: '1',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '2',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '3',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '4',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '5',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '6',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '7',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '8',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '9',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '10',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '11',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '12',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '13',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '14',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '15',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '16',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '17',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '18',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '19',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
  {
    id: '20',
    cantidad: 12,
    pago: 34,
    porcentaje: 34,
    horaInicio: formatToDate('5/17/2021'),
    horaFin: formatToDate('5/17/2021'),
    catalog: 'HEDS'
  },
];

export const displayedColumns: string[] = [
  'id',
  'cantidad',
  'pago',
  'porcentaje',
  'horaInicio',
  'horaFin',
  'catalog',
  'action',
];

export const catalogs: ValuesCatalog[] = [
  { id: 1, code: 'HEDS', name: 'HED' },
  { id: 2, code: 'HRNS', name: 'HRN' },
];

export const EMPTY = {
  id: '',
  cantidad: 0,
  pago: 0,
  porcentaje: 0,
  horaInicio: formatToDate('5/17/2021'),
  horaFin: formatToDate('5/17/2021'),
  catalog: 'HEDS'
};
