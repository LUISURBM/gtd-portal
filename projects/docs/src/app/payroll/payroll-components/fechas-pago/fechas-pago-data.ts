import { formatToDate } from "../../../values-catalog";
export interface FechaPago {
  id: string;
  fechaPago: Date;
  loading?: boolean;
}

export const fechaPagos: FechaPago[] = [
    {
        id: '1',
        fechaPago: formatToDate('5/17/2021')
    },
    {
        id: '2',
        fechaPago: formatToDate('5/17/2021')
    },
    {
        id: '3',
        fechaPago: formatToDate('5/17/2021')
    },
    {
        id: '4',
        fechaPago: formatToDate('5/17/2021')
    },
    {
        id: '5',
        fechaPago: formatToDate('5/17/2021')
    },
]


export const displayedColumns: string[] = ['fechaPago', 'action'];
