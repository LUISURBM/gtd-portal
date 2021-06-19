export interface Sancion {
  id: string;
  sancionPriv: number;
  sancionPublic: number;
}

export const sanciones: Sancion[] = [
    {
        id: '1',
        sancionPriv: 1298,
        sancionPublic: 98.1,
    },
    {
        id: '2',
        sancionPriv: 1298,
        sancionPublic: 98.1,
    },
    {
        id: '3',
        sancionPriv: 1298,
        sancionPublic: 98.1,
    },
    {
        id: '4',
        sancionPriv: 1298,
        sancionPublic: 98.1,
    },
    {
        id: '5',
        sancionPriv: 1298,
        sancionPublic: 98.1,
    },
]

export const displayedColumns: string[] = ['id', 'sancionPriv', 'sancionPublic', 'action'];
