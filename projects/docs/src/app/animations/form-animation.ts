import { animate, state, style, transition, trigger } from '@angular/animations';


export const animationsForm1 = [
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
      transition('void => *', animate(150))
  ]),
];

export const animationsForm = [
  trigger('grow', [
    transition('void <=> *', []),
    transition('* <=> *', [
      style({height: '{{startHeight}}px', opacity: 0}),
      animate('.5s ease'),
    ], {params: {startHeight: 0}})
  ])
];

export const animationsForm2 = [
  trigger('grow', [
    transition('void <=> *', []),
    transition('* <=> *', [style({ height: '{{startHeight}}px', opacity: 0 }), animate('.5s ease')], {
      params: { startHeight: 0 }
    })
  ])
];

export const animationsForm3 = [
  trigger('openCloseAnimation', [
    state('open', style({ maxHeight: '100px', overflow: 'auto' })),
    state('closed', style({ maxHeight: '60px' })),
    transition('* => closed', animate('0.2s')),
    transition('* => open', animate('0.5s')),
  ])
];
