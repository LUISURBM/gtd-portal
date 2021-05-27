export interface Totales {
  id: number;
  deduccion: number;
  devengo: number;
  totalAPagar: number;
}

export const totales: Totales[] = [
    {
        id: 1,
        devengo:    9999999,
        deduccion:    1298999,
        totalAPagar:  8701000
    }
]

export const displayedColumns: string[] = ['id', 'deduccion', 'devengo', 'totalAPagar'];
