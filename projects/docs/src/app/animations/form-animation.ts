import { animate, group, state, style, transition, trigger } from '@angular/animations';


export const animationsForm = [
  trigger('heightGrow', [
      state('closed', style({
          height: 0,
          padding: 0,
          overflow: 'hidden'
      })),
      state('open', style({
          height: 'auto',
          padding: '1.25rem'
      })),
      transition('void => *', animate('0.3s ease'))
  ]),
];

export const animationsForm2 = [
  trigger('heightGrow', [
    transition('void <=> *', []),
    transition('* <=> *', [
      style({height: '{{startHeight}}px', opacity: 0}),
      animate('.5s ease'),
    ], {params: {startHeight: 0}})
  ])
];

export const animationsForm1 = [
  trigger('heightGrow', [
    transition('void <=> *', []),
    transition('* <=> *', [style({ height: '{{startHeight}}px', opacity: 0 }), animate('.5s ease')], {
      params: { startHeight: 0 }
    })
  ])
];

export const animationsForm3 = [
  trigger('heightGrow', [
    state('open', style({ maxHeight: '100px', overflow: 'auto' })),
    state('closed', style({ maxHeight: '60px' })),
    transition('* => closed', animate('0.2s ease')),
    transition('* => open', animate('0.5s ease')),
  ])
];


export const animationsForm4 =  [
  trigger('flyInOut', [
    state('open', style({
      width: 120,
      transform: 'translateX(0)', opacity: 1
    })),
    transition('void => *', [
      style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: 120
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
];

export const animationsForm5 = [
  trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('200ms ease-in', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
    ])
  ])
]
