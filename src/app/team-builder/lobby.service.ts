import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Player } from '../shared/models/player';

export class LobbyService {
  private playerAdded = new Subject<Player>();
  private playerRemoved = new Subject<Player>();

  playerAdded$ = this.playerAdded.asObservable();
  playerRemoved$ = this.playerRemoved.asObservable();

  addPlayer(player: Player) {
    this.playerAdded.next(player);
  }

  removePlayer(player: Player) {
    this.playerRemoved.next(player);
  }
}