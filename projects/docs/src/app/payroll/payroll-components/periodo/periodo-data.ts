import { formatToDate } from '../../../values-catalog';
export interface Periodo {
  id: string;
  fechaGen: Date;
  fechaIngreso: Date;
  fechaLiquidacion: Date;
  fechaLiquidacionInicio: Date;
  fechaLiquidacionFin: Date;
  fechaRetiro: Date;
  tiempoLaborado: number;
  loading?: boolean;
}

export const periodos: Periodo[] = [
  {
    id: '1',
    fechaGen: formatToDate('5/17/2021'),
    fechaIngreso: formatToDate('5/17/2021'),
    fechaLiquidacion: formatToDate('5/17/2021'),
    fechaLiquidacionInicio: formatToDate('5/17/2021'),
    fechaLiquidacionFin: formatToDate('5/17/2021'),
    fechaRetiro: formatToDate('5/17/2021'),
    tiempoLaborado: 5,
  },
  {
    id: '2',
    fechaGen: formatToDate('5/17/2021'),
    fechaIngreso: formatToDate('5/17/2021'),
    fechaLiquidacion: formatToDate('5/17/2021'),
    fechaLiquidacionInicio: formatToDate('5/17/2021'),
    fechaLiquidacionFin: formatToDate('5/17/2021'),
    fechaRetiro: formatToDate('5/17/2021'),
    tiempoLaborado: 5,
  },
  {
    id: '3',
    fechaGen: formatToDate('5/17/2021'),
    fechaIngreso: formatToDate('5/17/2021'),
    fechaLiquidacion: formatToDate('5/17/2021'),
    fechaLiquidacionInicio: formatToDate('5/17/2021'),
    fechaLiquidacionFin: formatToDate('5/17/2021'),
    fechaRetiro: formatToDate('5/17/2021'),
    tiempoLaborado: 5,
  },
  {
    id: '4',
    fechaGen: formatToDate('5/17/2021'),
    fechaIngreso: formatToDate('5/17/2021'),
    fechaLiquidacion: formatToDate('5/17/2021'),
    fechaLiquidacionInicio: formatToDate('5/17/2021'),
    fechaLiquidacionFin: formatToDate('5/17/2021'),
    fechaRetiro: formatToDate('5/17/2021'),
    tiempoLaborado: 5,
  },
  {
    id: '5',
    fechaGen: formatToDate('5/17/2021'),
    fechaIngreso: formatToDate('5/17/2021'),
    fechaLiquidacion: formatToDate('5/17/2021'),
    fechaLiquidacionInicio: formatToDate('5/17/2021'),
    fechaLiquidacionFin: formatToDate('5/17/2021'),
    fechaRetiro: formatToDate('5/17/2021'),
    tiempoLaborado: 5,
  },
];

export const displayedColumns: string[] = [
  'fechaGen',
  'fechaIngreso',
  'fechaLiquidacion',
  'fechaLiquidacionInicio',
  'fechaLiquidacionFin',
  'fechaRetiro',
  'tiempoLaborado',
  'action',
];

export const EMPTY = {
  id: 0,
  fechaGen: new Date(),
  fechaIngreso: new Date(),
  fechaLiquidacion: new Date(),
  fechaLiquidacionInicio: new Date(),
  fechaLiquidacionFin: new Date(),
  fechaRetiro: new Date(),
  tiempoLaborado: 6,
};
