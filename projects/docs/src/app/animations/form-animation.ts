import { animate, state, style, transition, trigger } from '@angular/animations';


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
      transition('void => *', animate(150))
  ]),
];
