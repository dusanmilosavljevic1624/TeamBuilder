import { trigger, state, animate, style, transition } from '@angular/animations';

export const playerStateAnimation = trigger('playerState', [
  state('hidden', style({
    height: 0
  })),
  state('visible', style({
    height: '*'
  })),
  transition('hidden => visible', animate('500ms ease-in')),
  transition('visible => hidden', animate('500ms ease-out'))
]);