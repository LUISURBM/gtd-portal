export interface Libranza {
  id: string;
  deduccion: number;
  descripcion: string;
}

export const libranzas: Libranza[] = [
    {
        id: '1',
        deduccion: 1298,
        descripcion: 'L1',
    },
    {
        id: '2',
        deduccion: 1298,
        descripcion: 'L1',
    },
    {
        id: '3',
        deduccion: 1298,
        descripcion: 'L1',
    },
    {
        id: '4',
        deduccion: 1298,
        descripcion: 'L1',
    },
    {
        id: '5',
        deduccion: 1298,
        descripcion: 'L1',
    },
]

export const displayedColumns: string[] = ['id', 'deduccion', 'descripcion', 'action'];
