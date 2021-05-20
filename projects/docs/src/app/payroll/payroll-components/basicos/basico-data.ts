import { UUID } from "angular2-uuid";

export interface Basico {
  id: UUID;
  diasTrabajados?: number;
  sueldoTrabajado?: number;
}

export const basicos: Basico[] = [
  {
    id: 1,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 2,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 3,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 4,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 5,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 6,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 7,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 8,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 9,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 10,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 11,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 12,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 13,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 14,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 15,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 16,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 17,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 18,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 19,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
  {
    id: 20,
    diasTrabajados: 12,
    sueldoTrabajado: 34,
  },
];

export const displayedColumns: string[] = [
  'id',
  'diasTrabajados',
  'sueldoTrabajado',
  'action',
];

export const EMPTY = {
  id: 0,
  diasTrabajados: 0,
  sueldoTrabajado: 0,
} as Basico;
