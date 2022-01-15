import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, VERSION } from '@angular/core';

export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('cardFliper', [
      state('state1', style({ display: 'none' })),
      state('state2', style({ display: 'flex' })),
      // transition('default <=> flipped', [animate('400ms')]),

      transition('state2 => state1', [
        animate(
          `195ms cubic-bezier(0.4,0.0,1,1)`,
          style({
            transform: 'translateY(100%)',
            opacity: 0,
            position: 'abosolute',
          })
        ),
      ]),
      transition('state1 => state2', [
        animate(
          `195ms cubic-bezier(0.4,0.0,1,1)`,
          style({
            transform: 'translateY(0%)',
            opacity: 0,
            position: 'abosolute',
          })
        ),
      ]),
    ]),
  ],
})
export class DashboardComponent {
  state = 'state1';
}
