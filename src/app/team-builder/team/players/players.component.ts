import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Player } from '../../../shared/models/player';
import { LobbyService } from '../../lobby.service';
import { playerStateAnimation } from './player-state.animation';

@Component({
  selector: 'team-players',
  templateUrl: './players.component.html',
  styles: [
    '.list-group { overflow: hidden }'
  ],
  animations: [
    playerStateAnimation
  ]
})
export class PlayersComponent {
  @Input() players: Player[];
  @Output() onPlayerSelected: EventEmitter<Player> = new EventEmitter();
  visible: string = 'visible';

  togglePlayers() {
    this.visible = this.visible === 'hidden' ? 'visible' : 'hidden';
  }

  selectPlayer(player: Player) {
    this.onPlayerSelected.emit(player);
  }
}