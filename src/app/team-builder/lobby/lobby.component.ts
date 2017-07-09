import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Player } from '../../shared/models/player';
import { LobbyService } from '../lobby.service';

@Component({
  selector: 'builder-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  private players: Player[] = [];
  @Output() public onPlayerRemoved: EventEmitter<Player> = new EventEmitter();
  @Output() public onStart: EventEmitter<any> = new EventEmitter();

  constructor(private lobbyService: LobbyService){}

  addPlayer(player) {
    this.lobbyService.addPlayer(player);
  }

  removePlayer(player) {
    this.lobbyService.removePlayer(player);
  }

  onStartClicked() {
    this.onStart.emit();
  }

  ngOnInit() {
    this.lobbyService.playerAdded$.subscribe((player) => this.players.push(player));
    this.lobbyService.playerRemoved$.subscribe((player) => 
      this.players = this.players.filter((p) => p.id !== player.id));
  }
}