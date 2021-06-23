export interface Nota {
  id: string;
  nota: string;
  loading?: boolean;
}

export const notas: Nota[] = [
    {
        id: '1',
        nota: 'LN1',
    },
    {
        id: '2',
        nota: 'LN1',
    },
    {
        id: '3',
        nota: 'LN1',
    },
    {
        id: '4',
        nota: 'LN1',
    },
    {
        id: '5',
        nota: 'LN1',
    },
]


export const displayedColumns: string[] = ['nota', 'action'];
