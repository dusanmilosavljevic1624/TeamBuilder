import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Player } from '../../models/player';

@Component({
  selector: 'player',
  templateUrl: './player.component.html'
})
export class PlayerComponent {
  @Input() player: Player;
  @Output() onPlayerClicked: EventEmitter<Player> = new EventEmitter();

  onClick() {
    this.onPlayerClicked.emit(this.player);
  }
}